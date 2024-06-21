'use client'
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Image from "next/image";
import styles from "./main.module.css";


export default function Main() {

    const [listProduct, setListProduct] = useState([]);
    const [listComplete, setListComplete] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
      const getProduct = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setListProduct(data);
        setListComplete(data);
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

    const searchText = (text) => {
      setSearch(text);
      if(text.trim() === ""){
        setListProduct(listComplete);
        return
      }
      const newList = listProduct.filter((product) => product.title.toUpperCase().trim().includes(text.search.toUpperCase().trim()))
      setListProduct(newList);

    }

    if(listProduct[0] == null){
      return <Spinner/>
    }

  return (
    <>
    <div>
      <input type="text" value={search} placeholder="Pesquise o produto" onChange={(event) => searchText(event.target.value)}/>
      <button onClick={orderAz} className={styles.botao}>A-Z</button>
      <button onClick={orderZa} className={styles.botao}>Z-A</button>
      <button onClick={precoMa} className={styles.botao}>Preço: maior - menor</button>
      <button onClick={precoMe} className={styles.botao}>Preço: menor - maior</button>
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
