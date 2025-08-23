import React  from "react";
import { Link } from "react-router-dom";
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
import enviamos from "../../Images/Home/enviamos.png"
import Rodape from "../Rodape/Rodape";


function Home() {
  const categorias = [
    { nome: "Sapato", img: camisas },
    { nome: "Carteira", img: carteira },
    { nome: "Camisa", img: sapatos },
    { nome: "Tenis", img: tenis }
  ];

  return (
    <main className="bg-white text-gray-900  pt-32">


     <NavBar/>

     

      <section className="bg-gradient-to-b from-yellow-200 to-white py-2">
        

        <div className="container mx-auto pt-40 text-center">
              <section className="py-2">
        <div className="flex justify-center mb-4">
           <img src={logo_loja_menor} alt="logo DiFerreira" className="w-14 h-auto" />
           
        </div>
        <h2 className="text-2xl font-semibold">O básico aqui é ser extraordinário.</h2>
          <h3 className="text-xl mt-1 font-light">Artigos de luxo</h3>
      </section>
        
       
        </div>
      </section>
             <section className="mb-16"> 
          

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
             
             <div key={item} className=" flex flex-col items-center p-8 text-center ">
            
                <div className="flex flex-col items-center  w-44">
                  <h5>clique nesta camisa (teste para mostrar fluxo do site)</h5>
                               <Link to= "/comprar" className="link text-inherit" >
                            
                             <img src={camisa1} alt="camisa" />
                             </Link>
                            </div>
                
                <h4 className="font-extralight mt-3">Camisa Marca</h4>
                <p>Tamanhos: P, M, G</p>
                <p>Cores: Azul, Branco</p>
                <p className="mt-2 font-bold">R$ 450,00</p>
            
              </div>
              
            ))}
            
          </div>
        </div>
      </section>

      <section className="bg-black text-yellow-400 py-14 h-80 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
        
        <div className="container mx-auto  text-center space-x-10 ">
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

    <section className="py-8 ">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl  text-center font-medium">Os melhores preços</h2>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((item) => (
             
              <div key={item} className=" flex flex-col items-center p-8 text-center ">
            
                <div className="flex flex-col items-center  w-44">
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

   <section className="bg-black text-white py-8 h-auto sm:h-80 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
  <div className="container mx-auto px-4 mt-2">
    <h2 className="text-center text-yellow-400 text-2xl sm:text-3xl mb-14">
      Variedade
    </h2>
    <div className="flex justify-center gap-4 sm:gap-16 lg:gap-32">
      {categorias.map((categoria) => (
        <div
          key={categoria.nome}
          className="w-12 sm:w-20 lg:w-32 h-12 sm:h-20 lg:h-32  rounded-full flex items-center justify-center overflow-hidden"
        >
          <img
            src={categoria.img}
            alt={categoria.nome}
            className="object-contain w-full h-full"
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
             
             <div key={item} className=" flex flex-col items-center p-8 text-center ">
            
                <div className="flex flex-col items-center  w-44">
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
     
<section className="bg-black h-auto min-h-[500px] shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
  <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-end h-full px-6 lg:px-0">
    


    <div className="flex flex-col justify-between h-full items-center lg:items-start">
      
      <div className="mb-6 mt-10 lg:mt-20 lg:ml-40 text-center lg:text-left">
        <p className="text-yellow-400 text-2xl sm:text-3xl lg:text-4xl font-extralight leading-tight">
          Compras práticas e seguras!
        </p>
        <p className="text-white text-lg sm:text-xl lg:text-2xl lg:ml-52">
          Por meio do Mercado Pago.
        </p>
      </div>

      <img
        src={celular}
        alt="Celular"
        className="w-40 sm:w-52 mt-36 h-auto object-contain hidden lg:block "
      />
    </div>

 
    <div className="flex flex-col items-center space-y-6 mb-10 lg:mb-20 lg:mr-32 mt-10 lg:mt-0">
      <img
        src={maos}
        alt="Mãos"
        className="w-16 sm:w-20 h-auto object-contain"
      />
      <img
        src={pagamento}
        alt="Pagamento"
        className="w-44 sm:w-60 h-auto object-contain"
      />
    </div>

  </div>
</section>


      <section className=" text-black p-0 m-0 bg-#FFD51C  flex items-center mt-24 mb-28 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
        <div className=" ">
             <img
        src={enviamos}
        alt="enviamos para todo brasil"
        className="w-auto h-auto object-contain  "
      />
    </div>
       
      </section>

     <Rodape/>
  

    </main>
  );
}

export default Home;
