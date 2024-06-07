'use client'
import Image from "next/image";
import styles from "./main.module.css";
import { useEffect, useState } from "react";

export default function Main() {

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
      const getProduct = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setListProduct(data);
      }
        getProduct();
    }, [] ); 

    const orderAz = () => {
      const newList = [...listProduct].sort( (a,b) => 
        a.title.localeCompare(b.title)
      );
      setListProduct(newList);
    }

    const orderZa = () => {
      let newList = [...listProduct].sort( (a,b) => 
        a.title.localeCompare(b.title)
      );
      newList = newList.reverse();
      setListProduct(newList);
    }
    
    const precoMe = () => {
      let newList = [...listProduct].sort( (a,b) => 
        a.price - b.price
      );
      setListProduct(newList);
    }

    const precoMa = () => {
      let newList = [...listProduct].sort( (a,b) => 
        a.price - b.price
      );
      newList = newList.reverse();
      setListProduct(newList);
    }

  return (
    <>
    <div>
      <button onClick={orderAz}>A-Z</button>
      <button onClick={orderZa}>Z-A</button>
      <button onClick={precoMa}>Preço: maior - menor</button>
      <button onClick={precoMe}>Preço: menor - maior</button>
    </div>
    <main className={styles.main}>
      {listProduct.map((products)=> 
          <div className={styles.card}>
            <Image
              width={220}
              height={220}
              src={products.image}
              className={styles.img}
            />

            <p>{products.title}</p>
            <p>{products.price}</p>
            <p>{products.description.slice(0, 110)}</p>
            <p>{products.category}</p>
            <p>{products.rating.count}</p>
          </div>
      )}
    </main>
    </>
  );
}
