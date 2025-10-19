import { useState } from "react";
import { useEffect } from "react";
import { ShowcaseProductos } from "./ShowcaseProductos";

export function ContenedorProductos (){
    const [productos,setProductos]=useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Hubo un problema al buscar productos");
            }
            return res.json();
        })
        .then((data) => {
            setProductos(data.products);
        })
        .catch((err) => {
            console.log(err);
        });

       
    }, []); 

    return(
        <>
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-global py-20">
                <ShowcaseProductos lista={productos}/>
            </section>
        </>
    )

}