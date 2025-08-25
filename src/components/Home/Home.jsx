import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Navbar/NavBar"
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Rodape from "../Rodape/Rodape"
import logoLojaMenor from "../../assets/home/logo-loja-menor.png"
import camisaPretaAngels from "../../assets/camisas/preta-angels.png"
import tenisGoldenPreto from "../../assets/tenis/golden-preto.jpg"
import mercaoPagoCelular from "../../assets/mercadopago/celular-mercado.png"
import mercaoPagoMaos from "../../assets/mercadopago/logo-maos.png"
import enviarFrete from "../../assets/home/enviamos-frete.png"
import formasPagamento from "../../assets/mercadopago/formas-pagamento.png"
import camisaCirculo from "../../assets/variedade/camisas-circulo.png"
import carteiraCirculo from "../../assets/variedade/carteira-circulo.png"
import sapatosCirculo from "../../assets/variedade/sapatos-circulo.png"
import tenisCirculo from "../../assets/variedade/tenis-circulo.png"



function Home() {
  const categorias = [
    { nome: "Sapato", img: sapatosCirculo },
    { nome: "Carteira", img: carteiraCirculo },
    { nome: "Camisa", img: camisaCirculo },
    { nome: "Tenis", img: tenisCirculo },
  ]

  return (
    <main className="bg-white text-gray-900 pt-48 sm:pt-48">
      <NavBar />


      <section className="bg-gradient-to-b from-yellow-200 to-white py-6">
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center mb-4">
            <img
              src={logoLojaMenor}
              alt="logo DiFerreira"
              className="w-14 sm:w-20 h-auto"
            />
          </div>
          <h2 className="text-lg sm:text-2xl font-semibold">
            O básico aqui é ser extraordinário.
          </h2>
          <h3 className="text-base sm:text-xl mt-1 font-light">Artigos de luxo</h3>
        </div>
      </section>


      <section className="mb-12 sm:mb-16">
        <div className="flex justify-center items-center space-x-6 sm:space-x-10 flex-wrap">
          <FaWhatsapp size={40} className="text-yellow-400" />
          <FaInstagram size={40} className="text-yellow-400" />
          <FiMail size={40} className="text-yellow-400" />
        </div>
      </section>


      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl text-center font-medium mb-6">
            Pronta entrega
          </h2>
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3]
              .slice(0, window.innerWidth < 640 ? 2 : 3)
              .map((item) => (
                <div
                  key={item}
                  className="flex flex-col items-center p-4 sm:p-8 text-center"
                >
                  <div className="flex flex-col items-center w-full max-w-[180px]">
                    <h5 className="text-sm sm:text-base mb-2">
                      clique nesta camisa (teste para mostrar fluxo do site)
                    </h5>
                    <Link to="/comprar" className="link text-inherit">
                      <img
                        src={camisaPretaAngels}
                        alt="camisa"
                        className="w-full h-auto object-contain"
                      />
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


      <section className="bg-black text-yellow-400 py-14 min-h-[300px] 
      shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto text-center px-4">
          <h4 className="text-xl sm:text-2xl font-extralight mb-8">
            Nossas Marcas
          </h4>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5
           text-white text-sm sm:text-lg">
            <p>Palm Angels</p>
            <p>Moncler</p>
            <p>Off-White</p>
            <p>Gallery Dept</p>
            <p className="w-full"></p>
            <p>Essentials</p>
            <p>Casablanca</p>
            <p>Represent</p>
            <p>Ame</p>
            <p>Golden Goose</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl text-center font-medium mb-6">
            Os melhores preços
          </h2>
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3]
              .slice(0, window.innerWidth < 640 ? 2 : 3)
              .map((item) => (
                <div
                  key={item}
                  className="flex flex-col items-center p-4 sm:p-8 text-center"
                >
                  <div className="flex flex-col items-center w-full max-w-[180px]">
                    <img
                      src={camisaPretaAngels}
                      alt="camisa preta angels"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <h4 className="font-extralight">Tênis Marca</h4>
                  <p>Tamanhos: P, M, G</p>
                  <p>Cores: Azul, Branco</p>
                  <p className="mt-2 font-bold">R$ 450,00</p>
                </div>
              ))}
          </div>
        </div>
      </section>


      <section className="bg-black text-white py-16 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-yellow-400 text-xl sm:text-2xl mb-10">
            Variedade
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 lg:gap-20">
            {categorias.map((categoria) => (
              <div
                key={categoria.nome}
                className="w-16 sm:w-24 lg:w-32 h-16 sm:h-24 
                lg:h-32 rounded-full flex items-center justify-center overflow-hidden"
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
          <h2 className="text-xl sm:text-2xl text-center font-medium mb-6">
            Qualidade
          </h2>
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3]
              .slice(0, window.innerWidth < 640 ? 2 : 3)
              .map((item) => (
                <div
                  key={item}
                  className="flex flex-col items-center p-4 sm:p-8 text-center"
                >
                  <div className="flex flex-col items-center w-full max-w-[180px]">
                    <img
                      src={tenisGoldenPreto}
                      alt="Tênis preto"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <h4 className="font-extralight">Tênis Marca</h4>
                  <p>Tamanhos: P, M, G</p>
                  <p>Cores: Azul, Branco</p>
                  <p className="mt-2 font-bold">R$ 450,00</p>
                </div>
              ))}
          </div>
        </div>
      </section>


      <section className="bg-black min-h-[400px] py-10 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto flex flex-col 
        lg:flex-row justify-between items-center px-6 lg:px-12">
          <div className="flex flex-col justify-between
           items-center lg:items-start text-center lg:text-left">
            <div className="mb-6 mt-10 lg:mt-20">
              <p className="text-yellow-400 text-xl sm:text-2xl
               lg:text-3xl font-extralight leading-tight">
                Compras práticas e seguras!
              </p>
              <p className="text-white text-base sm:text-lg lg:text-xl">
                Por meio do Mercado Pago.
              </p>
            </div>
            <img
              src={mercaoPagoCelular}
              alt="Celular"
              className="w-32 sm:w-40 lg:w-52 mt-6 hidden lg:block"
            />
          </div>
          <div className="flex flex-col items-center space-y-4 lg:space-y-6 mt-6 lg:mt-0">
            <img
              src={mercaoPagoMaos}
              alt="Mãos"
              className="w-14 sm:w-16 lg:w-20 h-auto object-contain"
            />
            <img
              src={formasPagamento}
              alt="Pagamento"
              className="w-32 sm:w-44 lg:w-60 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mt-16 mb-20 px-4">
        <div className="flex justify-center">
          <img
            src={enviarFrete}
            alt="enviamos para todo brasil"
            className="max-w-full h-auto object-contain"
          />

        </div>
      </section>

      <Rodape />
    </main>
  )
}

export default Home
