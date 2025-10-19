import { Routes, Route } from "react-router-dom";
import { LayoutPublico } from "./components/LayoutPublico.jsx";
import { ProductDetail } from "./components/productos/ProductDetail.jsx";
import {Home} from "./pages/Home.jsx";

import { useState } from 'react';

import { CartProvider } from "./components/context/CartContext/CartContext.jsx";
import { CartPage } from "./pages/CartPage.jsx";

export function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartProvider>
        <Routes>
          <Route element={<LayoutPublico />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />

          </Route>
        </Routes>

      </CartProvider>
      

    </>
  );
};


