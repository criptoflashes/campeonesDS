import { writeFile } from "fs/promises";
import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import os from "os";
import temporaryDirectory from "temp-dir";
import { unlink } from "fs/promises";
import streamifier from "streamifier";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import util from "util";
/* import cloudinary from "./cloudinaryConn"; */
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

/* export async function savePhotosToTemp(image) {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const name = uuidv4();
  const ext = image.type.split("/")[1]; */
/* console.log(buffer) */

/*   const temporaryDirector = temporaryDirectory;
  const tempdir = os.tmpdir()
  const uploadDir = path.join(temporaryDirector, `/${name}.${ext}`);
  */
/*   await fs.writeFile(uploadDir, buffer);

  return { filepath: uploadDir, filename: name };
} */

/* async function uploadPhotosToCloudinary(newFile) {
  const newFilePath = newFile.filepath;
  console.log("newFilePath", newFilePath); */

/*   return new Promise(async (resolve, reject) => {
    try {
      const res = await cloudinary.uploader.upload(newFilePath);

      console.log("tipo", typeof res);

      resolve(res);
    } catch (error) {
      // Manejar cualquier error aquí
      console.error("Error al cargar la imagen a Cloudinary:", error);
      reject(error);
    }
  }); */
/* try {
    const result = await cloudinary.uploader.upload(newFilePath, { resource_type: "image" }); */

// Convierte la respuesta a JSON utilizando .json()
/*    return  result; */

/* } catch (error) { */
// Manejar cualquier error aquí
/* console.error("Error al cargar la imagen a Cloudinary:", error); */
/*   throw error; */ // Lanza el error para que se maneje en el código que llama a esta función
/*  } */

/* } */

/* export async function processImage(image) {
  try {
    const newFile = await savePhotosToTemp(image);
    

    const photos = await uploadPhotosToCloudinary(newFile);
console.log("photosjson", photos)
    const imageUrl = photos.secure_url;

    console.log("PP", imageUrl);

    return imageUrl;
  } catch (error) {
    return { errMsg: `this error ${error.message} ` };
  }
} */

/* export async function processImage(image) {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes); */
/*   const name = uuidv4();
  const ext = image.type.split("/")[1];  */

/* const fileName = name   */
/* const filePath = uploadDir */
//create path for images before uploading to cloudinary
/* const uploadDir = path.join(temporaryDirectory, `/${name}.${ext}`); */
/* console.log("file.path", filePath);  */
/* await writeFile(uploadDir, buffer);  */

/*   await unlink(uploadDir);
try{
 const res = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(  { resource_type: "image" }, async (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      })
      .end(buffer);
  }); */
/* 
  /* console.log("res cloudinary :",res) */
/* const imageUrl = res.secure_url;  */

//delete image from temp

/*  return imageUrl;
}catch(error){
  return { errMsg: `this error ${error.message} ` };
}
 
} */


/* Funciona en local */
export async function processImage(image) {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return buffer
  
}
/* Funciona en local */

