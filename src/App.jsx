import { Routes, Route } from "react-router-dom";
import { LayoutPublico } from "./components/LayoutPublico.jsx";
import { ProductDetail } from "./components/ItemDetail/ItemDetail.jsx";
import {Home} from "./pages/Home.jsx";

import { Login } from "./pages/Login/Login.jsx";
import { Admin } from "./components/admin/Admin.jsx";

import { useState } from 'react';

import { AuthProvider } from "./components/context/AuthContext/AuthContext.jsx";
import { CartProvider } from "./components/context/CartContext/CartContext.jsx";
import { CartPage } from "./pages/Cart/CartPage.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute.jsx";

export function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route element={<LayoutPublico />}>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<Login/>} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />

            </Route>

          </Routes>

        </CartProvider>
        <Routes>
            
          </Routes>
      </AuthProvider>

      

    </>
  );
};


