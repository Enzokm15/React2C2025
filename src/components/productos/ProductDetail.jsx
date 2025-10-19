import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "../Nav";


export function ProductDetail () {
    const [detail, setDetail] = useState(null);

    const {id}=useParams();
    useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se encontro el producto");
        }

        return res.json();
      })
      .then((data) => {
        setDetail(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
    return (
        <>
            
            <main className="px-global">
                {detail ? (
                    <div>
                        <img src={detail.images[0]} alt={detail.title} />
                    </div>
                    ) : (<p>Cargando...</p>)}
            </main>




        </>
    )
}