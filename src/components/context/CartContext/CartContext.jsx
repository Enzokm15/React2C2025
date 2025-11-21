import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    //Al iniciar, intenta leer el carrito guardado
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 🔹 Cada vez que cambia el carrito, se guarda en localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId) => {
    setCart((prev) => {
      let found = false;

      const newCart = prev.map((p) => {
        if (p.id === productId) {
          found = true;
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });

      // si no se encontró, agregar nuevo producto
      if (!found) {
        newCart.push({ id: productId, quantity: 1 });
      }

      return newCart;
    });


  };

  const removeOneFromCart= (productId) => {
    const updatedCart = [];
    for (const item of cart) {
      if (item.id === productId) {
        const newQty = item.quantity - 1;
        if (newQty > 0) updatedCart.push({ ...item, quantity: newQty });
      } else {
        updatedCart.push(item);
      }
    }
    setCart(updatedCart);
  }

  const deleteFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const clearCart = () => setCart([]);
  
  const totalItems = () => cart.reduce((acc, item) => acc + (item.quantity || 1), 0); 

  return (
    <CartContext.Provider value={{ cart, addToCart, removeOneFromCart, clearCart,totalItems,deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
}