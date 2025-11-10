
export default function ProductoCard({ producto }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {producto.nombre}
        </h2>

        <p className="text-gray-600 text-sm mt-1">
          {producto.descripcion}
        </p>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-blue-600 font-bold text-lg">
            ${producto.precio.toLocaleString()}
          </span>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
