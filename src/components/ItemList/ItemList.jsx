import { Link } from "react-router-dom";
import { ShoppingCart} from "lucide-react";
import { useCart } from "../context/CartContext/UseCart";

export function ItemList ({lista}){
    const { addToCart } = useCart();
    return(
        <>
            {lista.map( (product)=>(
            
            
               <div 
    key={product.id} 
    className="bg-white rounded-xl p-4 shadow-sm flex flex-col gap-3 h-full"
>
    <img 
        src={product.imageUrl[0]} 
        alt={product.name} 
        className="w-full aspect-[4/3] object-cover rounded-lg"
    />

    <h3 className="text-lg font-medium text-gray-800 text-center">
        {product.name}
    </h3>

    <span className="text-gray-700 font-semibold text-xl text-center">
        ${product.price}
    </span>

    <div className="mt-auto flex flex-col gap-2">
        <button
            onClick={() => addToCart(product.id)}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 cursor-pointer"
        >
            <ShoppingCart size={18} />
            Agregar al carrito
        </button>

        <Link
            to={`/detail/${product.id}`}
            className="text-center text-sm text-blue-600 hover:underline"
        >
            Ver más
        </Link>
    </div>
</div>
           
            ) )}
        </>
    )

}