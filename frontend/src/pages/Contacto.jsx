// src/pages/Contacto.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado. ¡Gracias por contactarnos!");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f8ff] to-[#eaf5ff] flex flex-col items-center justify-center px-6 py-16">
      {/* Título principal con animación */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-[#242a57] mb-4 text-center"
      >
        Contáctanos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg text-gray-600 mb-10 text-center max-w-xl"
      >
        ¿Tienes alguna pregunta o sugerencia? En Expomarket nos encanta escucharte.
        Déjanos tu mensaje y te responderemos lo antes posible.
      </motion.p>

      {/* Tarjeta del formulario */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg border-t-8 border-[#de6e28]"
      >
        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0bafd4] transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="ejemplo@correo.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0bafd4] transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Mensaje</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
              placeholder="Escribe tu mensaje..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 h-36 focus:outline-none focus:ring-2 focus:ring-[#0bafd4] transition"
            ></textarea>
          </div>
        </div>

        {/* Botón con gradiente corporativo */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-6 w-full bg-gradient-to-r from-[#de6e28] via-[#0bafd4] to-[#242a57] text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition"
        >
          Enviar mensaje
        </motion.button>
      </motion.form>

      {/* Pie pequeño */}
      <p className="text-gray-500 text-sm mt-8 text-center">
        © {new Date().getFullYear()} Expomarket — Todos los derechos reservados.
      </p>
    </div>
  );
}
