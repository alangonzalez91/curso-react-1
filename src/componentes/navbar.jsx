import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // iconos modernos

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo o nombre */}
        <h1 className="text-2xl font-bold">Agenda de actividades</h1>

        {/* Menú (visible en desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-gray-300">Almnaque</a></li>
          <li><a href="#" className="hover:text-gray-300">Completados</a></li>
          <li><a href="#" className="hover:text-gray-300">Pendientes</a></li>
          <li><a href="#" className="hover:text-gray-300">Nosotros</a></li>
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
            <li><a href="#" className="block hover:text-gray-300">Almanaque</a></li>
            <li><a href="#" className="block hover:text-gray-300">Completados</a></li>
            <li><a href="#" className="block hover:text-gray-300">Pendientes</a></li>
            <li><a href="#" className="block hover:text-gray-300">Nosotros</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
