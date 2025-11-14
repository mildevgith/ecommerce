import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Fish, CreditCard, ShieldCheck, Truck, ChevronLeft, ChevronRight, Star } from "lucide-react";

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
  // Slider Hero
  const images = [shirimhero, hero2, hero3];
  const [index, setIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleScroll = () => setShowButtons(window.scrollY < window.innerHeight * 0.9);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const HeroNext = () => setIndex((prev) => (prev + 1) % images.length);
  const HeroPrev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <main className="pt-20 bg-gray-50">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center overflow-hidden transition-all duration-700"
        style={{ backgroundImage: `url(${images[index]})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-3xl text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-2xl">
            Frescura y sabor del mar con <span className="text-[#ff9800]">Expomarket</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 font-light">
            Pescados, mariscos y productos premium directamente del mar a tu mesa. Entregas rápidas y calidad garantizada.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/productos" className="bg-[#ff9800] hover:bg-[#fb8c00] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Ver Productos
            </a>
            <a href="/ofertas" className="bg-white hover:bg-gray-100 text-[#1a237e] font-semibold px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105">
              Ofertas del Día
            </a>
          </div>
        </div>

        {/* Slider buttons */}
        {showButtons && (
          <>
            <button onClick={HeroPrev} className="fixed left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-r-full shadow-lg transition transform hover:scale-110 z-50">
              <ChevronLeft size={24} />
            </button>
            <button onClick={HeroNext} className="fixed right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-l-full shadow-lg transition transform hover:scale-110 z-50">
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(120%+1.3px)] h-[80px]">
            <path d="M321.39,56.44c58-10.79,114.14-30.13,172-41.94,82.8-16.5,168.06-17.17,250.45-0.39C823.78,32,906.67,62.6,985.66,73.24c70,9.52,140.64,4.09,214.34-11.24V120H0V67.22A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16">
          Explora nuestras <span className="text-[#ff9800]">Categorías</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { image: fishcate, label: "Pescados Enteros" },
            { image: Crustaceos, label: "Mariscos" },
            { image: Complementos, label: "Complementos" },
            { image: filetes, label: "Filetes de Pescado" },
          ].map((cat, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 group"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-60 sm:h-64 object-cover group-hover:brightness-110 transition duration-500"
              />

              {/* Capa de oscurecimiento elegante */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

              {/* Contenido del texto */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                  {cat.label}
                </h3>
                <p className="text-gray-200 text-sm sm:text-base mt-1 drop-shadow-sm">
                  Descubre lo mejor en {cat.label.toLowerCase()}
                </p>

                {/* 🔗 Botón Link con redirección */}
                <Link
                  to={`/productos/${cat.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mt-4 inline-block bg-[#ff9800] hover:bg-[#fb8c00] text-white font-semibold px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
                >
                  Ver Productos
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16">
            Productos <span className="text-[#ff9800]">Destacados</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[{ nombre: "Anillos de Calamar", precio: "$32.000 / Kg", imagen: anillosHome }, { nombre: "Camarón Precocido", precio: "$35.000 / Kg", imagen: camaronHomepre }, { nombre: "Langostino", precio: "$68.000 / Kg", imagen: langostinoHome }, { nombre: "Mixtura de Mariscos", precio: "$19.000 / Kg", imagen: mix }].map((producto, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
                <img src={producto.imagen} alt={producto.nombre} className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-5 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-[#ff9800] transition-colors">{producto.nombre}</h3>
                  <p className="text-[#ff9800] text-lg font-bold mt-2">{producto.precio}</p>
                  <button className="mt-4 w-full bg-[#1a237e] hover:bg-[#283593] text-white py-2 rounded-full font-semibold transition transform hover:scale-105 shadow-md">Agregar al carrito</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-20 bg-[#1a237e] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
            Por qué elegir <span className="text-[#ff9800]">Expomarket</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[{ icon: <Truck size={40} />, title: "Envíos Rápidos", desc: "Recibe tu pedido el mismo día en zonas seleccionadas." }, { icon: <ShieldCheck size={40} />, title: "Calidad Garantizada", desc: "Seleccionamos los mejores productos del mar." }, { icon: <CreditCard size={40} />, title: "Pagos Seguros", desc: "Paga con total confianza desde tu dispositivo." }, { icon: <Fish size={40} />, title: "Frescura Garantizada", desc: "Del mar a tu mesa sin intermediarios." }].map((benefit, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center space-y-4 transition-transform transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <div className="p-4 rounded-full bg-[#ff9800]/20 text-[#ff9800] shadow-md">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="text-gray-200 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900">Lo que dicen nuestros <span className="text-[#ff9800]">Clientes</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "María G.", review: "Productos frescos y entrega rápida. ¡Muy recomendable!", img: fishcate },
              { name: "Carlos L.", review: "Calidad insuperable, todo llegó perfecto y fresco.", img: Crustaceos },
              { name: "Ana P.", review: "Me encanta la variedad y los precios justos.", img: Complementos }
            ].map((test, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <img src={test.img} alt={test.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
                <p className="text-gray-700 italic">"{test.review}"</p>
                <h4 className="mt-4 font-semibold text-gray-900">{test.name}</h4>
                <div className="flex justify-center mt-2 space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center rounded-3xl bg-white shadow-lg py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
            Suscríbete y recibe <span className="text-[#ff9800]">ofertas exclusivas</span>
          </h2>
          <p className="mb-8 text-gray-600">
            Mantente al día con nuestras promociones y novedades.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="px-4 py-3 rounded-full w-full sm:w-2/3 border border-gray-300 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#ff9800] transition"
            />
            <button
              className="px-6 py-3 rounded-full bg-[#ff9800] text-white font-semibold hover:bg-[#e67e22] transition"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>


    </main>
  );
}
