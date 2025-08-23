import React, { useState  } from "react";
import { Link } from "react-router-dom";
function Menu() {
  const [Aberto, setAberto] = useState(false)

  const alternarMenu = () => {
    setAberto(!Aberto)
  }

  return (
    <section className="relative z-0"> 
      

      <button
  onClick={alternarMenu}
  className="fixed top-6 right-6 z-50 w-8 h-8 flex flex-col justify-center items-center"
>
  <span
    className={`block w-6 h-0.5 bg-[#F1D43B] mb-1 transition-all duration-300 ${
      Aberto ? "rotate-45 translate-y-1" : ""
    }`}
  ></span>
  <span
    className={`block w-6 h-0.5 bg-[#F1D43B] mb-1 transition-all duration-300 ${
      Aberto ? "opacity-0" : ""
    }`}
  ></span>
  <span
    className={`block w-6 h-0.5 bg-[#F1D43B] transition-all duration-300 ${
      Aberto ? "-rotate-45 -translate-y-2" : ""
    }`}
  ></span>
</button>


      {Aberto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={alternarMenu}
        ></div>
      )}

    
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-#F4F4F4
         text-black underline decoration-solid shadow-lg transform
          transition-transform duration-300 z-40 
          ${Aberto ? "translate-x-0" : "translate-x-full"}`}
      >
     
        <div className="flex flex-col mt-16 space-y-6 p-6 text-lg font-medium ">
       
       
       
         <Link  to="/camisas" className="link text-inherit"> Camisas  </Link>
        <Link  to="/bermudas" className="link text-inherit"> Bermudas  </Link>
               <Link  to="/tenis" className="link text-inherit"> Tênis  </Link>
                      <Link  to="/sapatos" className="link text-inherit"> Sapatos  </Link>
                             <Link  to="/acessorios" className="link text-inherit"> Acessórios  </Link>
      
        </div>
      </nav>

    </section>
  )
}

export default Menu
