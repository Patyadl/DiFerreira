import React from "react";
import NavBar from "../Navbar/NavBar"
import Rodape from "../Rodape/Rodape"
import Barra from "../BarraBusca/Barra"
import camisaPretaAngels from "../../assets/camisas/preta-angels.png"

function Sapatos() {

  return (
    <div>
      <NavBar />

      <section className="bg-gradient-to-b from-yellow-200 to-white to-35% pt-12">
        
        <section className="flex items-center justify-center mb-10 mt-56">
          <Barra />
        </section>


        <section className="flex items-center justify-start container mb-12">
          <h2 className="text-xl font-medium relative inline-block pl-9 pr-9">
           Sapatos
            <span className="absolute left-0 -bottom-1 w-full border-b-2 border-black"></span>
            <span className="absolute right-0 -bottom-7 h-6 border-r-2 border-black"></span>
          </h2>
        </section>
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="flex flex-col items-center p-8 text-center"
              >
                <div className="flex flex-col items-center w-44">
                   <img src= {camisaPretaAngels} alt="camisa" />
                </div>

                <h4 className="font-extralight mt-3">Camisa Marca</h4>
                <p>Tamanhos: P, M, G</p>
                <p>Cores: Azul, Branco</p>
                <p className="mt-2 font-bold">R$ 450,00</p>
              </div>
            ))}
          </div>
        </section>

      </section>

      <Rodape />
    </div>
  )
}



export default Sapatos
