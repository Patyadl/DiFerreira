import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Pesquisar() {
  const [pesquisarTermo, setPesquisarTermo] = useState('')
  
  const produtos = [
    { nome: "Camisa polo zara azul", preco: "R$ 450" },
    { nome: "Camisa polo zara preta", preco: "R$ 450" },
    { nome: "Camisa polo zara branca", preco: "R$ 450" },
    { nome: "Camisa palm angels preta", preco: "R$ 450" },
  ];


  const resultados = pesquisarTermo
    ? produtos.filter((p) =>
        p.nome.toLowerCase().includes(pesquisarTermo.toLowerCase())
      )
    : []

  const handleChange = (event) => {
    setPesquisarTermo(event.target.value)
  }

  return (
    <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg">
   
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Buscar produto..."
          className="px-3 py-2 flex-grow border-solid border-2 border-e-0 
          border-black rounded-l-lg focus:outline-none text-sm sm:text-base"
          value={pesquisarTermo}
          onChange={handleChange}
        />

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black 
        p-3 w-14 rounded-r-lg flex items-center justify-center">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </button>
      </div>

     
      {resultados.length > 0 && (
        <div className="absolute mt-1 w-full bg-white border border-black rounded-lg shadow-lg z-10">
          {resultados.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
            >
              {item.nome} - {item.preco}
            </div>
          ))}
        </div>
      )}

      {pesquisarTermo && resultados.length === 0 && (
        <div className="absolute mt-1 w-full bg-white border
         border-black rounded-lg shadow-lg z-10 px-4 py-2 text-gray-500 text-sm sm:text-base">
          Nenhum produto encontrado
        </div>
      )}
    </div>
  )
}

export default Pesquisar
