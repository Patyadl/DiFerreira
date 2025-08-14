import React from "react";
import NavBar from "../Navbar/NavBar";
import logo_loja_menor from "../../Images/Home/logo_loja_menor.png"
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import {FiMail} from "react-icons/fi"
import camisa1 from "../../Images/Camisas/IMG_1421.png"
import goldenBranco from "../../Images/Tenis/goldenBranco.jpg"
import  camisas from "../../Images/Variedade/camisas.png"
import  carteira from "../../Images/Variedade/carteira.png"
import  sapatos from "../../Images/Variedade/sapatos.png"
import  tenis from "../../Images/Variedade/tenis.png"
import  goldenPreto from "../../Images/Variedade/tenis2.jpg"
import  celular from "../../Images/MercadoPago/image 31.png"
import  pagamento from "../../Images/MercadoPago/image 32.png"
import  maos from "../../Images/MercadoPago/image 33.png"


function Home() {
  const categorias = [
    { nome: "Sapato", img: camisas },
    { nome: "Carteira", img: carteira },
    { nome: "Camisa", img: sapatos },
    { nome: "Tenis", img: tenis }
  ];

  return (
    <main className="bg-white text-gray-900">


     <NavBar/>

     

      <section className="bg-gradient-to-b from-yellow-200 to-white py-2">
        

        <div className="container mx-auto mt-4 text-center">
              <section className="py-2">
        <div className="flex justify-center mb-4">
           <img src={logo_loja_menor} alt="logo DiFerreira" className="w-14 h-auto" />
           
        </div>
        <h2 className="text-2xl font-semibold">O básico aqui é ser extraordinário.</h2>
          <h3 className="text-xl mt-1 font-light">Artigos de luxo</h3>
      </section>
        
       
        </div>
      </section>
             <section className="mb-24"> 
          

               <div className="flex justify-center items-center space-x-10 mt-16">
            <FaWhatsapp size={50} color="#F3DD47" />
            <FaInstagram size={50} color="#F3DD47" />
            <FiMail size={50} color="#F3DD47" />
          </div>
          </section> 

    

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl  text-center font-medium">Pronta entrega</h2>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((item) => (
             
             <div key={item} className=" p-5 text-center ">
            
                <div className="flex flex-col items-center p-20 ">
                             <img src={camisa1} alt="camisa" />
                            </div>
                
                <h4 className="font-extralight">Camisa Marca</h4>
                <p>Tamanhos: P, M, G</p>
                <p>Cores: Azul, Branco</p>
                <p className="mt-2 font-bold">R$ 450,00</p>
            
              </div>
              
            ))}
            
          </div>
        </div>
      </section>

      <section className="bg-black text-yellow-400 py-8 h-80">
        
        <div className="container mx-auto  text-center space-x-8 ">
          <div className="text-2xl mb-16"><h4 className="font-extralight">Nossas Marcas</h4></div>
          
          <span className="mx-4 cursor-pointer text-xl text-#F4F4F4">Palm Angels</span>
          <span className="mx-4 cursor-pointer text-xl  text-#F4F4F4">Moncler</span>
          <span className="mx-4 cursor-pointer text-xl text-#F4F4F4">Off-White</span>
         <span className="mx-4 cursor-pointer text-xl text-#F4F4F4">Gallery Dept</span>
       <p className="mb-4"></p>

          <span className="mx-4 cursor-pointer  text-xl text-#F4F4F4">Essentials</span>
          <span className="mx-4 cursor-pointer text-xl text-#F4F4F4">Casablanca</span>
        <span className="mx-4 cursor-pointer text-xl text-#F4F4F4">Represent</span>
          <span className="mx-4 cursor-pointer  text-xl text-#F4F4F4">Ame</span>
         <span className="mx-4 cursor-pointer  text-xl text-#F4F4F4">Golden Goose</span>
         
        </div>
      </section>

    <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl  text-center font-medium">Os melhores preços</h2>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((item) => (
             
             <div key={item} className=" p-5 text-center ">
            
                <div className="flex flex-col items-center p-20 ">
                             <img src={goldenBranco} alt="camisa" />
                            </div>
                
                <h4 className="font-extralight">Camisa Marca</h4>
                <p>Tamanhos: P, M, G</p>
                <p>Cores: Azul, Branco</p>
                <p className="mt-2 font-bold">R$ 450,00</p>
            
              </div>
              
            ))}
            
          </div>
        </div>
      </section>

    <section className="bg-black text-white py-8  h-80">
      <div className="container mx-auto px-4 mt-8">
        <h2 className="text-center text-yellow-400 text-2xl  mb-10">
          Variedade
        </h2>
        <div className="flex justify-center space-x-32">
          {categorias.map((categoria) => (
            <div
              key={categoria.nome}
              className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden"
            >
              <img
                src={categoria.img}
                alt={categoria.nome}
                className=" object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
   
     <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl  text-center font-medium">Qualidade</h2>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((item) => (
             
             <div key={item} className=" p-5 text-center ">
            
                <div className="flex flex-col items-center p-20 ">
                             <img src={goldenPreto} alt="camisa" />
                            </div>
                
                <h4 className="font-extralight">Camisa Marca</h4>
                <p>Tamanhos: P, M, G</p>
                <p>Cores: Azul, Branco</p>
                <p className="mt-2 font-bold">R$ 450,00</p>
            
              </div>
              
            ))}
            
          </div>
        </div>
      </section>
     
<section className="bg-black py-8 relative">
<div className="flex flex-row items-start justify-between relative">
  <div className="sticky top- left-0 self-start flex-shrink-0">
    <img
      src={celular}
      alt="Celular"
      className="w-64 h-auto object-contain"
    />
  </div>

    <div className="flex flex-col items-start space-y-6 text-left">
      

      <div className="flex flex-row items-start space-x-4">
        <div>
          <p className="text-yellow-400 text-2xl font-semibold leading-tight">
            Compras práticas e seguras!
          </p>
          <p className="text-white text-lg">
            Por meio do Mercado Pago.
          </p>
        </div>
        <img
          src={maos}
          alt="Mãos"
          className="w-16 h-auto object-contain"
        />
      </div>

   
      <div className="flex items-end">
        <img
          src={pagamento}
          alt="Pagamento"
          className="w-64 h-auto object-contain"
        />
      </div>
    </div>

  </div>
</section>



     
      <section className="bg-yellow-400 text-black py-8">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-4xl">👑</span>
          </div>
          <p className="text-xl font-semibold">Enviamos para todo o Brasil</p>
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">Mapa</div>
        </div>
      </section>

     
  

    </main>
  );
}

export default Home;
