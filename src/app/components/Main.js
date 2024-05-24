import Image from "next/image";
import styles from "./main.module.css";

export default async function Main() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();

  return (
    <main className={styles.main}>
      {data.map((products)=> 
        <div className={styles.card} key={products.id}>
            <p>{products.title}</p>
            <p>{products.price}</p>
            <p>{products.description}</p>
            <p>{products.category.name}</p>

            <ul className={styles.carrossel}>
              <li>
            
              </li>

              <li>
            
              </li>

              <li>
            
              </li>

            </ul>
    

        </div>
      )}
    </main>
  );
}
