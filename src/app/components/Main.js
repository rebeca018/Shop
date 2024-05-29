import Image from "next/image";
import styles from "./main.module.css";

export default async function Main() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

  return (
    <main className={styles.main}>
      {data.map((products)=> 
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
  );
}
