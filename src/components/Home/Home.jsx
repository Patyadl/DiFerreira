import React from "react";
import NavBar from "../Navbar/NavBar";
import logo_loja_menor from "../../Images/Home/logo_loja_menor.png"
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import {FiMail} from "react-icons/fi"

function Home() {
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
          <h2 className="text-2xl  mb-6 text-center font-medium">Pronta entrega</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((item) => (
              <div key={item} className="bg-yellow-400 p-4 text-center rounded-md">
            

                <div className="bg-gray-200 h-40 mb-4">Imagem Camisa</div>
                <h4 className="font-semibold">Camisa Marca</h4>
                <p>Tamanhos: P, M, G</p>
                <p>Cores: Azul, Branco</p>
                <p className="mt-2 font-bold">R$ 450,00</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-yellow-400 py-8">
        <div className="container mx-auto px-4 text-center space-x-8">
          <span className="mx-4 cursor-pointer">Marca 1</span>
          <span className="mx-4 cursor-pointer">Marca 2</span>
          <span className="mx-4 cursor-pointer">Marca 3</span>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-medium mb-6 text-center">Os melhores preços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((item) => (
              <div key={item} className="bg-yellow-400 p-4 text-center rounded-md">
                <div className="bg-gray-200 h-40 mb-4">Imagem Tênis</div>
                <h4 className="font-semibold">Tênis Marca</h4>
                <p>Tamanhos: 40 – 49</p>
                <p>Cores: Preto</p>
                <p className="mt-2 font-bold">R$ 1.450,00</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-yellow-400 text-xl font-medium mb-4">Variedade</h2>
          <div className="flex justify-center space-x-6">
            {["Sapato", "Carteira", "Camisa", "Tênis"].map((categoria) => (
              <div key={categoria} className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                {categoria}
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-medium mb-6 text-center">Qualidade</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((item) => (
              <div key={item} className="bg-yellow-400 p-4 text-center rounded-md">
                <div className="bg-gray-200 h-40 mb-4">Imagem Sapato</div>
                <h4 className="font-semibold">Sapato Marca</h4>
                <p>Tamanhos: 40 – 49</p>
                <p>Cores: Preto</p>
                <p className="mt-2 font-bold">R$ 1.450,00</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="bg-black text-white py-8">
        <div className="container mx-auto px-4 flex flex-col items-center space-y-4 text-center">
          <p className="text-lg">Compras práticas e seguras! Por meio do Mercado Pago.</p>
          <div className="bg-yellow-400 p-4 rounded-md flex space-x-4">
            <span>Ícone Mercado Pago</span>
            <div className="flex flex-col text-black">
              <span>Dinheiro</span>
              <span>Cartão de Crédito</span>
              <span>PIX e Boleto</span>
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
