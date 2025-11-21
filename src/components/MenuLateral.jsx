import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";


export function MenuLateral(){
    const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      // Si hace click fuera del contenedor -> cerrar
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    // Escuchar clicks globales
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="" ref={menuRef}>
      <button
        className="text-white px-5 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <Menu size={24} />
      </button>

      {open && (
        <ul className="MenuNav">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="flex items-center gap-1">
            <span>Destacados</span>
            <ChevronDown />
          </li>

          <li className="flex items-center gap-1">
            <span>Categorías</span>
            <ChevronDown />
          </li>
        </ul>
      )}
    </div>
  );
}
