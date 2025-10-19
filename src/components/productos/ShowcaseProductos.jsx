import { Link } from "react-router-dom";
import { ShoppingCart} from "lucide-react";

import { useCart } from "../context/CartContext/UseCart";

export function ShowcaseProductos ({lista}){
    
    const { addToCart } = useCart();

    return(
        <>
            {lista.map( (producto)=>( 
                <div key={producto.id} className="bg-white rounded-xl">
                    <img src={producto.images[0]} alt="" />
                    <p>{producto.title}</p>
                    <div>
                        <span>{producto.price}</span>
                        <button onClick={() => addToCart(producto.id)} >
                            <ShoppingCart/>
                        </button>
                        
                        
                    </div>
                    <Link to={`/detail/${producto.id}`} key={producto.id}> 
                        mas
                    </Link>
                </div>
                    
                    


                
            ) )}
        </>
    )

}