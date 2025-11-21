import { useCart } from "../../components/context/CartContext/UseCart";
import { ItemDetailCart } from "./itemDetailCart";


export function CartPage() {
  const { cart, clearCart, } = useCart();

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">🛒 Carrito</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) =>{ 
              return(
                <ItemDetailCart key={item.id} item={item} />
              )
            })}
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