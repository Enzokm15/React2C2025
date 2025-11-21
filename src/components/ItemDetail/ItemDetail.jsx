import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ENDPOINT } from "../../utils/constantes";
import { useCart } from "../context/CartContext/UseCart"; 

export function ProductDetail() {
    const [detail, setDetail] = useState(null);
    const [error, setError] = useState(null);
    const {addToCart}=useCart();

    const { id } = useParams();

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const res = await fetch(`${ENDPOINT}/products/${id}`);
                if (!res.ok) throw new Error("Error en la petición");

                const data = await res.json();
                setDetail(data);
            } catch (err) {
                console.error("Error al obtener el producto:", err);
                setError("No se pudo cargar el producto.");
            }
        };

        fetchDetail();
    }, [id]);

    if (error) return <p className="text-red-600">{error}</p>;
    if (!detail) return <p>Cargando...</p>;

    return (
        <main className="px-global py-10 flex justify-center">
            <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

                <img
                    src={detail?.imageUrl?.[0]}
                    alt={detail.name}
                    className="w-full h-auto rounded-xl shadow-md border"
                />

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-semibold">{detail.title}</h1>

                    <p className="text-xl font-medium text-gray-800">
                        ${detail.price}
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        {detail.description}
                    </p>

                    <button
                        onClick={() => addToCart(id)}
                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition cursor-pointer"
                    >
                        Agregar al carrito
                    </button>
                </div>

            </div>
        </main>
    );
}
