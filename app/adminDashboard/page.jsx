"use client"
import axios from "axios";
import { useState, useEffect, useRef } from "react"
import { useRouter, useParams } from "next/navigation"
import FormData from "form-data"
/* import { useCreateProductMutation } from "@/redux/services/productApi"; */

export const dynamic = 'force-dynamic';

function AdminDashboard() {

  /* const [createProd] = useCreateProductMutation() */


  let [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    description: ""
  })

  const [file, setFile] = useState()

  const params = useParams()
  const router = useRouter()
  const formRef = useRef()






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

    await createProduct()

  }

  const handleChange = (e) => {
    /*   console.log(e.target.value)
      console.log(e.target.name) */

    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })

  }





  //POST product
  const createProduct = async () => {
    console.log("eeeeee")
    try {
      const formData = new FormData()
      formData.append("title", newProduct.title);
      formData.append("category", newProduct.category)
      formData.append("description", newProduct.description)

      if (file) {

        formData.append("image", file)
        console.log("entro")
      }

      if (!params.id) {
        console.log("0000")
                const result = await fetch("api/products", {
                  method: "POST",
                  body: formData,
                }).then(res => console.log("vvvvvvvv",res) )
/* const data = await result.json()
console.log(data) */
        /* const data = await result.json();
        console.log(data.secure_url) */

     /*    const result = await axios.post("https://campeones-del-sur.vercel.app/api/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }) */
        
        /* console.log(result)  *//* .then(res => res.json()) */
      } else {

        const res = await axios.put("/api/products/" + params.id, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(res => res.text())

        console.log("paso", res)
      }

      formRef.current.reset(); 

      router.refresh()
       router.push('/adminProducts')
     


    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error)
        // Mostrar el error de Cloudinary en la consola o en la interfaz de usuario
        console.error("Error de Cloudinary:", error.response.data.error);
      } else {
        // Manejar otros errores
        console.log(error)
        console.error("Error:", error);
      }
    }
  }


  
  
  const handleDelete = async () => {
    if (window.confirm("¿Estás seguro de borrar este producto?")) {
      try {
        const res = await fetch(`/api/products/${params.id}`, {
          method: "DELETE",
        })
        router.refresh()
        router.push('/adminProducts')

        console.log(res)
      } catch (error) {
        console.log(error)
        router.refresh()
        router.push('/adminProducts')

      }
    }
  }









  return (

    <div>
      <div className="h-screen flex justify-center items-center">

        <form action="" onSubmit={handleSubmit} ref={formRef}>
          <header className="flex justify-between">

            <h1 className="font-bold text-3xl">{
              !params.id ? "Crea un producto" : "Edita un producto"
            }</h1>
            <button type="button" className="bg-red-500 px-3 rounded-md" onClick={handleDelete}>
              Borrar producto
            </button>


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
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />


          <input type="text" name="description" placeholder="Descripción" className="bg-gray-300 border-2 w-full p-4 rounded-lg my-4" rows={3} onChange={handleChange} value={newProduct.description} />



          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-4  p-2 rounded-lg">    {
            !params.id ? "Create" : "Update"

          }</button>
        </form>
      </div>


      {/* preview images */}
      <div className="flex justify-center items-center pb-3">
        {file && (
          <img
            className="w-96 object-contain mx-auto my-4"
            src={URL.createObjectURL(file)}
            alt=""
          />
        )}
      </div>

    </div>

  )
}



export default AdminDashboard


