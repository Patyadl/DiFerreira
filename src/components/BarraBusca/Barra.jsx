import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Pesquisar({ onSearch }) {
  const [pesquisarTermo, setPesquisarTermo] = useState('');

  const handleChange = (event) => {
    setPesquisarTermo(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="flex items-center w-full max-w-lg ">
  
      <input
        type="text"
        placeholder="Buscar produto..."
        className="px-4 py-2 flex-grow border-solid border-2 border-e-0 
         border-black rounded-l-lg focus:outline-none "
        value={pesquisarTermo}
        onChange={handleChange}
      />

     
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black p-3 w-14 rounded-r-lg flex items-center justify-center">
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default Pesquisar;
