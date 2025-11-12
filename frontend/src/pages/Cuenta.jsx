// src/pages/Cuenta.jsx
import { motion } from "framer-motion";

export default function Cuenta() {
  return (
    <motion.div
      className="pt-28 pb-16 text-center bg-gradient-to-b from-[#f9fafc] to-white min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* 🔷 Título principal */}
      <motion.h1
        className="text-4xl font-extrabold text-[#242a57] mb-4 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mi Cuenta
      </motion.h1>

      {/* 📜 Subtítulo */}
      <motion.p
        className="text-gray-600 text-lg mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Consulta y gestiona tu información personal, pedidos y preferencias.
      </motion.p>

      {/* 🧾 Sección de botones simulando opciones de cuenta */}
      <div className="flex flex-col md:flex-row justify-center gap-6 px-6">
        {[
          { texto: "Ver Pedidos", color: "#0bafd4" },
          { texto: "Editar Perfil", color: "#de6e28" },
          { texto: "Cerrar Sesión", color: "#242a57" },
        ].map((btn, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300"
            style={{ backgroundColor: btn.color }}
          >
            {btn.texto}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

