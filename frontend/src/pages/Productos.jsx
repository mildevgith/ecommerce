import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductoCard from "../components/ProductoCard";
import LangostinoHome from "../assets/imgsHero/LangostinoHome.jpeg";
import anillosHome from "../assets/imgsHero/anillosHome.jpeg";
import fileteTilapia from "../assets/imgsHero/fileteTilapia.jpeg";
import postasSalmon from "../assets/imgsHero/postasSalmon.jpg";
import camaronHomepre from "../assets/imgsHero/camaronHomepre.jpeg";
import crustaceos from "../assets/imgsHero/crustaceos.jpeg";
import enteros from "../assets/imgsHero/enteros.jpeg";
import filetes from "../assets/imgsHero/filetes.jpeg";
import fishcate from "../assets/imgsHero/fishcate.jpeg";
import hero3 from "../assets/imgsHero/hero3.jpeg";
import mix from "../assets/imgsHero/mix.jpeg";
import postaspargo from "../assets/imgsHero/postaspargo.jpeg";






export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Simulación de productos cargados desde API
    const data = [
      {
        id: 1,
        nombre: "Langostino con cascara variedad de tamaños",
        descripcion: "Deliciosos Langostinos seleccionados",
        precio: 68.000,
        imagen: LangostinoHome,
      },
      {
        id: 2,
        nombre: "Anillos de calamar",
        descripcion: "Frescos para apanar y gratinar",
        precio: 32000,
        imagen: anillosHome,
      },
      {
        id: 3,
        nombre: "Filete de Tilapia",
        descripcion: "Pulpo fresco, ideal para parrilla o ceviche.",
        precio: 23.000,
        imagen: fileteTilapia,
      },
      {
        id: 3,
        nombre: "Postas de Salmón",
        descripcion: "Calidad premium.",
        precio: 55000,
        imagen: postasSalmon,
      },
      {
        id: 3,
        nombre: "Camarón Precocido pelado y desvenado",
        descripcion: "Ideal para parrilla o ceviche.",
        precio: 55000,
        imagen: camaronHomepre,
      },
      {
        id: 3,
        nombre: "Camarón Crudo limpio",
        descripcion: "Ideal para parrilla o ceviche.",
        precio: 35.000,
        imagen: crustaceos,
      },
      {
        id: 3,
        nombre: "Pargo Rojo",
        descripcion: "Ideal para el encocado o frito",
        precio: 59.000,
        imagen: enteros,
      },

    {
        id: 3,
        nombre: "Filete de Corvina",
        descripcion: "Ideal para ceviche peruano",
        precio: 75.000,
        imagen: filetes,
      },
      {
        id: 3,
        nombre: "Mojarra sesa",
        descripcion: "Idela para fritar y apanar",
        precio: 25.000,
        imagen: fishcate,
      },
      {
        id: 3,
        nombre: "Postas de Bagre de Rio",
        descripcion: "Ideal para el sancocho",
        precio: 19.000,
        imagen: hero3,
      },
      {
        id: 3,
        nombre: "Mixtura de mariscos",
        descripcion: "Ideal para la cazuela de mariscos y arroz de mar",
        precio: 28.000,
        imagen: mix,
      },
      {
        id: 3,
        nombre: "Postas de Robalo",
        descripcion: "Ideal para sancocho frito o sudado",
        precio: 75.000,
        imagen: postaspargo,
      },
    ];

    setProductos(data);
  }, []);

  return (
    <>
      <Navbar />

      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Nuestros Productos
        </h1>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>

        {/* Si no hay productos */}
        {productos.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No hay productos disponibles en este momento.
          </p>
        )}
      </section>

      <Footer />
    </>
  );
}
