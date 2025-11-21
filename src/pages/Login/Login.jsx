import { useState } from "react";
import { useAuth } from "../../components/context/AuthContext/UseAuth";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
        e.preventDefault();
        const ok = login(username, password);

        if (ok) {
            navigate("/admin");
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };

return (
  <div className="min-h-screen flex items-center justify-center bg-[#faf2e7] text-[#111] px-4">
    <div className="w-full max-w-sm bg-[#1a1a1a] p-8 rounded-2xl shadow-2xl border border-[#2a2a2a]">

      <h2 className="text-2xl font-semibold text-center mb-6 text-white tracking-wide">
        Iniciar sesión
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          placeholder="Usuario: Chocolily"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2.5 bg-[#111] border border-[#2a2a2a] text-gray-200
                     rounded-xl placeholder-gray-400 focus:outline-none 
                     focus:ring-2 focus:ring-[#333]"
        />

        <input
          type="password"
          placeholder="Contraseña: usagi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2.5 bg-[#111] border border-[#2a2a2a] text-gray-200
                     rounded-xl placeholder-gray-400 focus:outline-none 
                     focus:ring-2 focus:ring-[#333]"
        />

        <button
          type="submit"
          className="w-full py-2.5 rounded-xl font-medium
                     bg-[#111] text-white border border-[#2a2a2a]
                     hover:bg-[#181818] transition-all"
        >
          Entrar
        </button>
      </form>

      {error && (
        <p className="text-red-400 text-sm mt-4 text-center">{error}</p>
      )}
    </div>
  </div>
);
}