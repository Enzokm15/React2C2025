import { ENDPOINT } from "../utils/constantes";


export async function createProduct(product){
    const res= await fetch(ENDPOINT+"/products",{
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(product)
    });
    
    if (!res.ok) {
        throw new Error("No se puede crear el produducto ");
    }


};