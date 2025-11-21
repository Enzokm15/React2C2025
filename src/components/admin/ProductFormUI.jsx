export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
return (
  <section className="min-h-screen flex justify-center items-start bg-gray-100 py-10 px-4">
    <form
      className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md border border-gray-200
                 space-y-6"
      onSubmit={onSubmit}
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
        Agregar producto
      </h2>

      {/* Nombre */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Nombre:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={onChange}
          required
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg
                     placeholder-gray-400 focus:ring-2 focus:ring-blue-400
                     focus:border-blue-400 focus:outline-none"
        />
        {errors.name && (
          <p className="text-red-600 text-xs">{errors.name}</p>
        )}
      </div>

      {/* Precio */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Precio:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={onChange}
          required
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg
                     placeholder-gray-400 focus:ring-2 focus:ring-blue-400
                     focus:border-blue-400 focus:outline-none"
        />
        {errors.price && (
          <p className="text-red-600 text-xs">{errors.price}</p>
        )}
      </div>

      {/* Categoría */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Categoría:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={onChange}
          required
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg
                     placeholder-gray-400 focus:ring-2 focus:ring-blue-400
                     focus:border-blue-400 focus:outline-none"
        />
        {errors.category && (
          <p className="text-red-600 text-xs">{errors.category}</p>
        )}
      </div>

      {/* Descripción */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Descripción:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={onChange}
          required
          className="w-full px-3 py-2 h-28 bg-white border border-gray-300 rounded-lg
                     placeholder-gray-400 focus:ring-2 focus:ring-blue-400
                     focus:border-blue-400 focus:outline-none"
        ></textarea>
        {errors.description && (
          <p className="text-red-600 text-xs">{errors.description}</p>
        )}
      </div>

      {/* Imagen */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Imagen:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
          className="w-full text-gray-700 file:bg-gray-200 file:border file:border-gray-300
                     file:px-3 file:py-2 file:rounded-lg file:text-gray-800 file:mr-3
                     cursor-pointer"
        />
        {errors.file && (
          <p className="text-red-600 text-xs">{errors.file}</p>
        )}
      </div>

      {/* Botón */}
      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg
                   font-medium transition disabled:opacity-50"
        type="submit"
        disabled={loading}
      >
        {loading ? "Guardando..." : "Guardar"}
      </button>
    </form>
  </section>
);
};