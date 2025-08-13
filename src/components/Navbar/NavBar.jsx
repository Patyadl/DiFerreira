import React from "react"
import logo_loja from "../../Images/NavBar/logo_loja.png"

function NavBar(){

      return(

            <header className="bg-black text-#EDF0B5">
        <div className="container mx-auto px-4 py-20 flex items-center justify-between">
    
          <button className="focus:outline-none">
            <span className="block w-6 h-0.5 bg-yellow-400 mb-1"></span>
            <span className="block w-6 h-0.5 bg-yellow-400 mb-1"></span>
            <span className="block w-6 h-0.5 bg-yellow-400"></span>
          </button>

            <div className="flex flex-col items-center">
             <img src={logo_loja} alt="logo DiFerreira" />
            </div>
          <div className="w-6"></div>
        </div>
      </header>
      )
}
export default NavBar