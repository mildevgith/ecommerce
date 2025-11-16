import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Fish,
  CreditCard,
  ShieldCheck,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Imágenes del hero y secciones
import shirimhero from "../assets/imgsHero/shirimhero.jpg";
import fishcate from "../assets/imgsHero/fishcate.jpeg";
import Crustaceos from "../assets/imgsHero/Crustaceos.jpeg";
import Complementos from "../assets/imgsHero/Complementos.jpg";
import filetes from "../assets/imgsHero/filetes.jpeg";
import anillosHome from "../assets/imgsHero/anillosHome.jpeg";
import camaronHomepre from "../assets/imgsHero/camaronHomepre.jpeg";
import langostinoHome from "../assets/imgsHero/langostinoHome.jpeg";
import mix from "../assets/imgsHero/mix.jpeg";
import hero2 from "../assets/imgsHero/Hero1.jpg";
import hero3 from "../assets/imgsHero/Hero2.jpg";

export default function Home() {
  // 🌀 Slider principal (Hero)
  const images = [shirimhero, hero2, hero3];
  const [index, setIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(true);

  // Cambio automático cada 5s
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  // Ocultar flechas al hacer scroll
  useEffect(() => {
    const handleScroll = () =>
      setShowButtons(window.scrollY < window.innerHeight * 0.9);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <main className="pt-20 bg-gray-50 font-sans overflow-hidden">
      {/* ===== HERO ===== */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Frescura y sabor del mar con{" "}
            <span className="text-[#ff9800]">Expomarket</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 font-light">
            Productos premium directamente del mar a tu mesa. Entregas rápidas y
            calidad garantizada.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/productos"
              className="bg-[#ff9800] hover:bg-[#fb8c00] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Ver Productos
            </a>
            <a
              href="/ofertas"
              className="bg-white hover:bg-gray-100 text-[#1a237e] font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              Ofertas del Día
            </a>
          </div>
        </motion.div>

        {/* Flechas laterales */}
        {showButtons && (
          <>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-r-full shadow-lg transition-transform hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-l-full shadow-lg transition-transform hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Ola inferior decorativa */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(120%+1.3px)] h-[80px]"
          >
            <path
              d="M321.39,56.44c58-10.79,114.14-30.13,172-41.94,82.8-16.5,168.06-17.17,250.45-0.39C823.78,32,906.67,62.6,985.66,73.24c70,9.52,140.64,4.09,214.34-11.24V120H0V67.22A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* ===== CATEGORÍAS ===== */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-12">
          Categorías destacadas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { image: fishcate, label: "Pescados Enteros" },
            { image: Crustaceos, label: "Mariscos" },
            { image: Complementos, label: "Complementos" },
            { image: filetes, label: "Filetes de Pescado" },
          ].map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white shadow-lg rounded-2xl overflow-hidden group transition-all duration-300"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 w-full py-3 bg-black/40 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white">
                  {cat.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== PRODUCTOS ===== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1a237e] mb-10">
            Productos destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { nombre: "Anillos de Calamar", precio: "$32.000 / Kg", imagen: anillosHome },
              { nombre: "Camarón Precocido", precio: "$35.000 / Kg", imagen: camaronHomepre },
              { nombre: "Langostino", precio: "$68.000 / Kg", imagen: langostinoHome },
              { nombre: "Mixtura de Mariscos", precio: "$19.000 / Kg", imagen: mix },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gray-50 shadow-md rounded-xl overflow-hidden transition"
              >
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {p.nombre}
                  </h3>
                  <p className="text-[#ff9800] font-bold">{p.precio}</p>
                  <button className="mt-4 w-full bg-[#1a237e] text-white py-2 rounded-full hover:bg-[#283593] transition">
                    Agregar al carrito
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFICIOS ===== */}
      <section className="py-16 bg-[#1a237e] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Truck size={40} />, title: "Envíos Rápidos", desc: "Recibe tu pedido el mismo día en zonas seleccionadas." },
            { icon: <ShieldCheck size={40} />, title: "Calidad Garantizada", desc: "Seleccionamos los mejores productos del mar." },
            { icon: <CreditCard size={40} />, title: "Pagos Seguros", desc: "Compra con confianza desde cualquier dispositivo." },
            { icon: <Fish size={40} />, title: "Frescura Garantizada", desc: "Del mar a tu mesa sin intermediarios." },
          ].map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="text-[#ff9800]">{b.icon}</div>
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="text-gray-300 text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== BANNER PROMOCIONAL ===== */}
      <section className="relative bg-[#ff9800] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fish-scale.png')] opacity-10" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          >
            ¡Envío GRATIS hoy en todos tus pedidos!
          </motion.h2>
          <p className="text-lg md:text-xl mb-8 font-light">
            Aprovecha esta promoción exclusiva por tiempo limitado.
          </p>
          <a
            href="/ofertas"
            className="bg-white text-[#ff9800] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-transform hover:scale-105 shadow-lg"
          >
            Ver Ofertas
          </a>
        </div>
      </section>
    </main>
  );
}
