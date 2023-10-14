"use server";
import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import os from "os";
import { v2 as cloudinary} from "cloudinary";
import { revalidatePath } from "next/cache";
import { createTempDirectory } from "create-temp-directory";


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

async function savePhotosToLocal(formData) {
  const files = formData.getAll("file");
  /*    console.log(files) */
  
   const tempDir = await createTempDirectory();

  
  const multipleBuffersPromise = files.map((file) =>
    file.arrayBuffer().then((data) => {
      const buffer = Buffer.from(data);
      const name = uuidv4();
      const ext = file.type.split("/")[1];

      

      /* const tempDir = os.tmpdir(); */
      const uploadDir = path.join(tempDir.path, `/${name}.${ext}`);

      fs.writeFile(uploadDir, buffer);
      console.log(uploadDir)
      return { filepath: uploadDir, filename: file.name };
    })
  );

  return await Promise.all(multipleBuffersPromise);
}

async function uploadPhotosToCloudinary(newFiles) {
  const multiplePhotosPromise = newFiles.map((file) =>
    cloudinary.uploader.upload(file.filepath, { folder: "nextjs_upload" })
  );

  return await Promise.all(multiplePhotosPromise);
}




export async function uploadPhoto(formData) {
  /* console.log(formData);
 */


  try {
    const newFiles = await savePhotosToLocal(formData);

    /* console.log(newFiles); */
    const photos = await uploadPhotosToCloudinary(newFiles);
    console.log("photoss", photos);



    newFiles.map((file) => fs.unlink(file.filepath));

    return { msg: "upload sucess!" };
   

    revalidatePath("/");


  } catch (error) {
    return { errMsg: error.message };
  }
}


export async function getAllPhotos() {
  
   try {
     
 const { resources } = await cloudinary.search.expression('folder:nextjs_upload/*').sort_by('created_at', 'desc').max_results(500).execute()

return resources
 
   } catch (error) {
     return { errMsg: error.message };
   }
 }
 