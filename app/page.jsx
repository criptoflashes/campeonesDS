/* import Users from "@/components/Users"; */
import Hero from "components/Hero.jsx"
import MainContentHome from "components/MainContentHome";
/* import Image from "next/image"; */

//REact Server Component
//esta función la voy a ejecutar  desde el servidor, el método fetch se usa en el front como el back
//estos datos se ejecutan desde el servidor y no en el front end es por eso que lo veré en la consola del vsc y no en la del navegador
/* async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
} */

//para ver los datos en el front

async function IndexPage() {
 /*  const users = await fetchUsers(); */

  return (
    <div className="flex flex-col place-content-center px-10 ">
      <Hero />
      <div className="flex flex-col w-3/4 pt-5 mx-auto ">
      <h2 className=" text-2xl text-slate-600 text-center	">
        “En nuestra empresa nos dedicamos a ofrecer alimentos de alta calidad
        que deleiten el paladar de nuestros clientes. Nos esforzamos por brindar
        una experiencia única en cada momento compartido con nuestros productos.
        Nos enorgullece ser una empresa argentina y trabajamos para reflejar la
        excelencia de nuestra cultura en todo lo que hacemos.”
      </h2>
      </div>
      <MainContentHome />


      {/* <Users users={users} /> */}
    </div>
  );
}

export default IndexPage;
