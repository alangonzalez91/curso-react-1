import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // iconos modernos

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [mostrarModal, setMostrarModal] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo o nombre */}
        <h1 className="text-2xl font-bold">Agenda de actividades</h1>

        {/* Menú (visible en desktop) */}
         <ul className="hidden md:flex space-x-6"> 
          <li><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">+ Crear actividad</button></li>
          <li><button onClick={() => setMostrarModal(true)} href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Nosotros</button></li> 
        </ul>

        {/* Botón de menú (visible en móvil) */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 px-6 pb-4">
          <ul className="space-y-3">
            <li><a href="#" className="block hover:text-gray-300">+ Crear actividad</a></li>
            <li><a href="#" className="block hover:text-gray-300">Nosotros</a></li>
          </ul>
        </div>
      )}


      
        {/* Modal */}
        {mostrarModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white p-6 rounded-2xl shadow-2xl w-80 relative">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Esto es un proyecto de para un curso de React .js del Inforamtorio de segunda mitad de 2025
              </h2>
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Dev: Alan González
              </h2>
              <button
                onClick={() => setMostrarModal(false)}
                className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-900 transition"
              >
                Cerrar
              </button>              
            </div>
          </div>
        )}
        </nav>
  );
};

export default NavBar;
