

async function getUser(id){
  console.log(id)
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  /* console.log(data.data) */
  return data.data
}



async function UsersPage({params}) {
   const user =  await getUser(params.id)
   console.log(user)
  return (
    <div>
      <h1>users details: {user.first_name} </h1>
    </div>
  )
}

export default UsersPage
