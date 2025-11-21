import { ShoppingCart,User, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { MenuLateral } from "../MenuLateral";


import { useCart } from "../context/cartContext/UseCart";


export function Nav(){

    const {cart,totalItems} = useCart();

    return (
        <nav className="flex flex-row justify-between items-center relative px-3 px-global  bg-[#212121]">

            <MenuLateral/>
            <div className="flex gap-5 p-8 ">
                <Heart className="text-white "/>
                <User className="text-white "/>
                <Link to="/cart" className="relative">
                    <ShoppingCart className="text-white w-6 h-6" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {totalItems()}
                        </span>
                        
                </Link>
                
                
            </div>
            
            

        </nav>

    );
};
