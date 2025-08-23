import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import camisa1 from "../../Images/Camisas/IMG_1421.png";
import camisa2 from "../../Images/Camisas/IMG_1414.png";
import camisateste from "../../Images/MercadoPago/image 32.png";
import mercadopago from "../../Images/MercadoPago/mercadopago.png";

function Comprar() {
  const imagens = {
    preto: [camisa1, camisa2],
    azul: [camisateste],
  }

  const [corSelecionada, setCorSelecionada] = useState("preto")
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)

  const fotos = imagens[corSelecionada]

  const proxima = () => setIndex((prev) => (prev + 1) % fotos.length)
  const anterior = () =>
    setIndex((prev) => (prev - 1 + fotos.length) % fotos.length)

  return (
    <div className="mt-32 sm:mt-52 md:mt-48 pt-48 sm:pt-0">
      <NavBar />

     
  <section
  className="hidden sm:flex items-center justify-start
   container px-4 sm:px-6 lg:px-8 pt-6 bg-gradient-to-b from-yellow-200 to-white py-12 sm:py-20"
>
  <h2
    className="text-xl sm:text-xl md:text-xl font-medium relative 
    inline-block pl-6 pr-6 sm:pl-9 sm:pr-9"
  >
    Camisa Palm Angels
    <span className="absolute left-0 -bottom-1 w-full border-b-2 border-black"></span>
    <span className="absolute right-0 -bottom-7 h-6 border-r-2 border-black"></span>
  </h2>
</section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
 
          <div className="flex flex-col items-center">
            <div className="relative w-full h-[280px] sm:h-[380px] md:h-[450px] 
            lg:h-[500px] flex items-center justify-center">
              <img
                src={fotos[index]}
                alt="Camisa"
                onClick={() => setZoom(true)}
                className="w-64 sm:w-72 md:w-80 lg:w-72 object-contain 
                rounded-lg shadow-lg transition-all duration-300 cursor-zoom-in"
              />

      
              <button
                onClick={anterior}
                className="absolute top-1/2 left-3 sm:left-4 transform 
                -translate-y-1/2 bg-black/60 hover:bg-black/80
                 text-white px-2 sm:px-3 py-1 rounded-full transition"
              >
                ‹
              </button>

              <button
                onClick={proxima}
                className="absolute top-1/2 right-3 sm:right-4 transform
                 -translate-y-1/2 bg-black/60 hover:bg-black/80
                  text-white px-2 sm:px-3 py-1 rounded-full transition"
              >
                ›
              </button>
            </div>

      
            <div className="flex gap-2 sm:gap-3 mt-4 flex-wrap justify-center">
              <button
                onClick={() => {
                  setCorSelecionada("preto");
                  setIndex(0);
                }}
                className={`px-4 py-1 rounded-full border text-sm sm:text-base ${
                  corSelecionada === "preto"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Preto
              </button>
              <button
                onClick={() => {
                  setCorSelecionada("azul");
                  setIndex(0);
                }}
                className={`px-4 py-1 rounded-full border text-sm sm:text-base ${
                  corSelecionada === "azul"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Azul
              </button>
            </div>
          </div>

       
          <div className="flex flex-col font-medium text-base sm:text-lg md:text-xl gap-3 sm:gap-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Camisa Palm Angels
            </h2>
            <p>Tamanhos: P, M, G</p>

            <p className="flex gap-1 sm:gap-2 flex-wrap">
              Cores:{" "}
              {Object.keys(imagens).map((cor, i) => (
                <span
                  key={cor}
                  onClick={() => {
                    setCorSelecionada(cor);
                    setIndex(0);
                  }}
                  className={`cursor-pointer hover:underline ${
                    corSelecionada === cor ? "font-bold" : "text-gray-700"
                  }`}
                >
                  {cor.charAt(0).toUpperCase() + cor.slice(1)}
                  {i < Object.keys(imagens).length - 1 && ","}
                </span>
              ))}
            </p>

            <p className="font-bold text-xl sm:text-2xl md:text-3xl">
              R$ 450,00
            </p>
            <p className="text-sm text-gray-600 -mt-1">à vista</p>

            <button
              className="bg-yellow-400 text-black font-medium text-base sm:text-lg px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 transition hover:bg-yellow-300 hover:text-gray-800 w-full sm:w-48"
            >
              Comprar
            </button>
          </div>
        </div>

   
        <section className="flex items-center justify-center mt-10">
          <img
            src={mercadopago}
            alt="logo mercadopago"
            className="w-32 sm:w-40 md:w-56 h-auto object-contain"
          />
        </section>
      </section>

   
      {zoom && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setZoom(false)}
        >
          <img
            src={fotos[index]}
            alt="Zoom Camisa"
            className="max-w-full max-h-full object-contain rounded-lg cursor-zoom-out"
          />
        </div>
      )}
    </div>
  )
}

export default Comprar
