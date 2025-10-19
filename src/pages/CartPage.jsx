import { useCart } from "../components/context/CartContext/UseCart"
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

export function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const ids = cart.map((item) => item.id);

  useEffect(() => {
    if (ids.length === 0) {
      setProducts([]);
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=0");
        const data = await res.json();
        const filtered = data.products.filter((p) => ids.includes(p.id));
        setProducts(filtered);
      } catch (err) {
        console.error("Error al cargar productos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [ids]);

  const cartWithDetails = products.map((p) => {
    const item = cart.find((i) => i.id === p.id);
    return { ...p, quantity: item?.quantity || 1 };
  });

  if (loading) return <p className="text-center mt-10 text-gray-500">Cargando productos...</p>;

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">🛒 Carrito</h1>

      {cartWithDetails.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartWithDetails.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Precio: ${item.price.toFixed(2)} x {item.quantity} ={" "}
                    <span className="font-semibold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition"
                  title="Eliminar del carrito"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={clearCart}
            className="w-full mt-6 bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}