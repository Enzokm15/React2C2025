import { useState } from "react";
import { useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { ENDPOINT } from "../../utils/constantes";

export function ItemListContainer(){
    const [productos,setProductos]=useState([]);
    useEffect(() => {
        fetch(`${ENDPOINT}/products`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Hubo un problema al buscar productos");
            }
            return res.json();
        })
        .then((products) => {
            setProductos(products);
        })
        .catch((err) => {
            console.log(err);
        });

       
    }, []); 

    return(
        <>
            <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-global py-20 auto-rows-fr">
                <ItemList lista={productos}/>
            </section>
        </>
    )

}