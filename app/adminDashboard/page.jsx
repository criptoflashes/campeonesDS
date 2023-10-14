"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter, useParams } from "next/navigation"
/* import FormData from "form-data" */
import { uploadPhoto } from "@/actions/uploadActions";
import ButtonSubmit from "@/components/ButtonSubmit";
/* import { useCreateProductMutation } from "@/redux/services/productApi"; */

export const dynamic = 'force-dynamic';

function AdminDashboard() {

  /* const [createProd] = useCreateProductMutation() */


  let [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    description: ""
  })



  const params = useParams()
  const router = useRouter()





  const formRef = useRef()
  const [files, setFiles] = useState([])


  async function handleInputFiles(e) {
    if (e.target.files) {


      const files = e.target.files;
      console.log(files)
      const newFiles = [...files].filter((file) => {
        if (file.size < 2000 * 2000) {
          return file;
        }
      })

      setFiles(prev => [...newFiles, ...prev])


    }
  }
  //gettin data to update later

  const getProduct = async () => {
    const res = await fetch(`/api/products/${params.id}`)
    const data = await res.json()

    setNewProduct({
      title: data.productFound.title,
      description: data.productFound.description,
      category: data.productFound.category

    })

  }
  useEffect(() => {

    if (params.id) {
      getProduct()
    }
  }, [])



  //Submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    await handleUpload()

  }

  const handleChange = (e) => {
    /*   console.log(e.target.value)
      console.log(e.target.name) */

    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })

  }





  //POST product
  async function handleUpload() {
    console.log("eeeeee")




    if (!files.length) return alert('No image files are selected')



    const formData = new FormData()
    formData.append("title", newProduct.title);
    formData.append("category", newProduct.category)
    formData.append("description", newProduct.description)

    files.forEach(file => {
      formData.append("file", file)
      console.log("entro")

    })




    const res = await uploadPhoto(formData)
    console.log(res)

  }




  return (

    <div>
      <div className="h-screen flex justify-center items-center">

        <form action={handleUpload} /* onSubmit={handleSubmit} */ ref={formRef}>
          <header className="flex justify-between">

            <h1 className="font-bold text-3xl">{
              !params.id ? "Crea un producto" : "Edita un producto"
            }</h1>
            {/*             <button type="button" className="bg-red-500 px-3 rounded-md" onClick={handleDelete}>
              Borrar producto
            </button> */}


          </header>
          <textarea type="text" name="title" placeholder="Título" className="bg-gray-300 border-2 w-full p-4 rounded-lg my-4" onChange={handleChange} value={newProduct.title}></textarea>


          <select name="category" className="bg-gray-300 border-2 w-1/2 p-4 rounded-lg my-4" onChange={handleChange} value={newProduct.category}>
            <optgroup>
              <option disabled>Selecciona una categoría</option>


              <option value="Queso">Queso</option>
              <option value="Chorizo">Chorizo</option>
              <option value="Yerba">Yerba</option>
              <option value="Manteca">Manteca</option>
              <option value="Ajo">Ajo</option>
              <option value="Miel">Miel</option>
              <option value="Otros">Otros</option>
            </optgroup>
          </select>

          <input
            type="file"
            accept="image/*"
            multiple
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2"
            onChange={handleInputFiles}

          />


          <input type="text" name="description" placeholder="Descripción" className="bg-gray-300 border-2 w-full p-4 rounded-lg my-4" rows={3} onChange={handleChange} value={newProduct.description} />



          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-4  p-2 rounded-lg">    {
            !params.id ? "Create" : "Update"

          }</button>

          <ButtonSubmit value="Upload" />


        </form>
      </div>


      {/* preview images */}
      <div className="flex justify-center items-center pb-3">
        {files && files?.map(file => (
          <img
            className="w-96 object-contain mx-auto my-4"
            src={URL.createObjectURL(file)}
            alt=""
            key={file.name}
          />
        ))}
      </div>

    </div>

  )
}



export default AdminDashboard


