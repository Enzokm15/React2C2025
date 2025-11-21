import { useEffect, useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../../components/context/cartContext/UseCart";
import { ENDPOINT } from "../../utils/constantes";

export const ItemDetailCart= ({item}) => {
    const { deleteFromCart, addToCart, removeOneFromCart } = useCart();
    const [itemDetail, setItemDetail] = useState(null);

  useEffect(() => {
        const fetchDetail = async () => {
            try {
                const res = await fetch(`${ENDPOINT}/products/${item.id}`);
                const data = await res.json();
                setItemDetail(data);
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };
        fetchDetail();
    }, [item.id]);
      
    if (!itemDetail) {
        return (
        <div className="flex justify-center items-center p-4 border rounded-lg text-gray-500">
            Cargando producto...
        </div>
        );
    }
    return (
        <div
            className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
        >
            <img
                src={itemDetail.imageUrl[0]}
                alt={itemDetail.name}
                className="w-20 h-20 object-cover rounded-lg"
            />

            <div className="flex-1">
                <p className="font-semibold text-gray-800">{itemDetail.name}</p>
                <p className="text-gray-600 text-sm mt-1">
                Precio: ${itemDetail.price.toFixed(2)} x {item.quantity} ={" "}
                <span className="font-semibold text-gray-800">
                    ${(itemDetail.price * item.quantity).toFixed(2)}
                </span>
                </p>
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-fit">
                <button
                    onClick={() => item.quantity > 1 && removeOneFromCart(item.id)}
                    className={`
                    w-10 h-10 flex items-center justify-center
                    border-r border-gray-300  bg-white
                    ${item.quantity > 1 ? " cursor-pointer" : " cursor-not-allowed"}
                    `}
                >
                    <Minus size={16} />
                </button>

                {/* Cantidad */}
                <span className="w-10 h-10 flex items-center justify-center border-r border-gray-300 text-black">
                    {item.quantity}
                </span>

                <button
                    onClick={() => addToCart(item.id)}
                    className="w-10 h-10 flex items-center justify-center bg-white cursor-pointer"
                >
                    <Plus size={16} />
                </button>

            </div>

            <button
                    onClick={() => deleteFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition cursor-pointer"
                    title="Eliminar del carrito"
                >
                    <Trash2 size={18} />
                </button>
        </div>
    )
    
  }