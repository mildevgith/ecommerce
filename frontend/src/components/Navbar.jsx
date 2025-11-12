// src/components/Navbar.jsx
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  Tag,
  Home,
  Phone,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom"; // 👈 Importamos Link de React Router
import logo from "../assets/imgsHero/logo.png";
import slogan from "../assets/imgsHero/slogan.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Slogan */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto sm:h-14 transition-transform hover:scale-105"
            />
            <img
              src={slogan}
              alt="Slogan Expomarket"
              className="h-8 w-auto sm:h-10 block"
            />
          </Link>

          {/* Buscador central (solo escritorio) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center w-full max-w-md bg-gray-100 rounded-full shadow-inner focus-within:ring-2 focus-within:ring-[#ff9800]">
              <input
                type="text"
                placeholder="Buscar productos, categorías..."
                className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-700 focus:outline-none"
              />
              <button className="bg-[#ff9800] hover:bg-[#fb8c00] text-white rounded-full p-2 transition">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Enlaces escritorio */}
          <div className="hidden md:flex items-center space-x-6 text-[#1a237e] font-medium">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-[#ff9800] transition"
            >
              <Home size={15} /> Inicio
            </Link>
            <Link
              to="/ofertas"
              className="flex items-center gap-1 hover:text-[#ff9800] transition"
            >
              <Tag size={15} /> Ofertas
            </Link>
            <Link
              to="/nosotros"
              className="flex items-center gap-1 hover:text-[#ff9800] transition"
            >
              <Info size={15} /> Nosotros
            </Link>
            <Link
              to="/contacto"
              className="flex items-center gap-1 hover:text-[#ff9800] transition"
            >
              <Phone size={15} /> Contacto
            </Link>
            <Link
              to="/cuenta"
              className="flex items-center gap-1 hover:text-[#ff9800] transition"
            >
              <User size={15} /> Cuenta
            </Link>
            <Link
              to="/carrito"
              className="flex items-center gap-1 hover:text-[#ff9800] transition"
            >
              <ShoppingCart size={15} /> Carrito
            </Link>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#1a237e] hover:text-[#ff9800] transition"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-slide-down">
          <div className="px-5 py-4 space-y-3">
            {/* Logo y slogan en móvil */}
            <div className="flex flex-col items-center mb-2">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
              <img src={slogan} alt="Slogan" className="h-8 w-auto mt-1" />
            </div>

            {/* Buscador móvil */}
            <div className="flex items-center w-full bg-gray-100 rounded-full shadow-inner mb-2">
              <input
                type="text"
                placeholder="Buscar..."
                className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-700 focus:outline-none"
              />
              <button className="bg-[#ff9800] hover:bg-[#fb8c00] text-white rounded-full p-2 transition">
                <Search size={18} />
              </button>
            </div>

            {/* Links de navegación móvil */}
            {[
              { label: "Inicio", to: "/", icon: <Home size={18} /> },
              { label: "Ofertas", to: "/ofertas", icon: <Tag size={18} /> },
              { label: "Nosotros", to: "/nosotros", icon: <Info size={18} /> },
              { label: "Contacto", to: "/contacto", icon: <Phone size={18} /> },
              { label: "Mi Cuenta", to: "/cuenta", icon: <User size={18} /> },
              { label: "Carrito", to: "/carrito", icon: <ShoppingCart size={18} /> },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
                className="flex items-center gap-2 py-2 border-b text-gray-700 hover:text-[#ff9800] transition"
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
