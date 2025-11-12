import { Link } from "react-router-dom";

export default function Confirmacion() {
  return (
    <div className="text-center py-24 px-6">
      <h1 className="text-4xl font-bold text-[#242a57] mb-6">
        ¡Gracias por tu compra! 🎉
      </h1>
      <p className="text-gray-600 mb-8">
        Tu pedido ha sido confirmado. Recibirás un correo con los detalles.
      </p>
      <Link
        to="/productos"
        className="bg-[#de6e28] text-white px-6 py-3 rounded-lg hover:bg-[#0bafd4] transition"
      >
        Seguir comprando
      </Link>
    </div>
  );
}
