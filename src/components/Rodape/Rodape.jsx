import React from "react"
import { FaInstagram } from "react-icons/fa"

function Rodape() {
  return (
    <header className="bg-black text-#F1D43B py-20 sm:py-20 ">
      <div className="container mx-auto px-4 sm:px-8 lg:px-20 flex flex-row 
        flex-wrap justify-between items-center gap-8 lg:gap-16 "
      >
        <section className="flex flex-col items-center lg:items-start
          text-center lg:text-left gap-6 w-full lg:w-auto"
        >
          <p className="text-2xl sm:text-3xl">Confira nossa rede social!</p>
          <div className="flex flex-col sm:flex-row items-center lg:items-end gap-4">
            <FaInstagram size={60} sm={{ size: 80 }} color="#F3DD47" />
            <p className="text-xl sm:text-2xl">@diferreiraloja</p>
          </div>
        </section>

        <section className="w-full lg:w-auto flex justify-center lg:justify-start ">
          <img
            src="/Rodape/image 27.png"
            alt="imagem do perfil da loja no instagram"
            className="w-40 sm:w-48 md:w-56 lg:w-auto h-auto object-contain"
          />
        </section>
      </div>
    </header>
  )
}

export default Rodape
