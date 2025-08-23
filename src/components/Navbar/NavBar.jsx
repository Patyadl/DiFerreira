import React, { useState } from "react";
import logo_loja from "../../Images/NavBar/logo_loja.png"
import Menu from "./Menu/Menu"
import { Link } from "react-router-dom";

function NavBar() {
  const [aberto, setAberto] = useState(false)

  return (
   <header className="fixed top-0 left-0 w-full bg-black text-#EDF0B5 z-50 shadow-md ">
  <div 
    className="container mx-auto px-4 sm:px-28 py-4 sm:py-4 
               flex flex-row-reverse items-center justify-between
               "
  >
    <Menu aberto={aberto} setAberto={setAberto} />


    <div className="flex flex-col items-center">
        <Link to= "/" className="link text-inherit" >
      <img
        src={logo_loja}
        alt="logo DiFerreira"
        className="w-40 sm:w-40 md:w-40 lg:w-40 h-auto"
      />
      </Link>
    </div>

    <div className="w-6"></div>
  </div>
  
</header >

  )
}

export default NavBar
