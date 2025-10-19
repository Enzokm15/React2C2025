
import { useState } from "react";
import { Menu, X,ChevronDown } from "lucide-react";
export function MenuLateral(){

    const [open, setOpen] = useState(false);

    
    return(
        <div className="">
            <button className="text-white px-5  " onClick={() => setOpen(!open)}>
                 <Menu size={24} />
            </button>
            {open && (
                
                <ul className="MenuNav ">
                    <li>Home</li>
                    <li>
                        <span>Destacados</span>
                        <ChevronDown/></li>
                    <li>
                        <span>Categorias</span>
                        <ChevronDown/>
                    </li>
                    
                </ul>
            
                        
            )}
        </div>
        
    )    
}