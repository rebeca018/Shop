import Image from "next/image";
import styles from "./main.module.css";

export default async function Main() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

  return (
    <main className={styles.main}>
      {data.map((products)=> 
          <div className={styles.card}>
            <p>{products.title}</p>
            <p>{products.price}</p>
            <p>{products.description}</p>
            <p>{products.category}</p>
            <p>{products.rating.count}</p>
          
            <Image
              width={110}
              height={110}
              src={products.image}
              className={styles.img}
            />
          </div>
      )}
    </main>
  );
}
