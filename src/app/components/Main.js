import Image from "next/image";
import styles from "./main.module.css";

export default async function Main() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();

  return (
    <main className={styles.main}>
      {data.map((products)=> 
        <div className={styles.card} key={products.id}>
          <div className={styles.card2}>
            <p>{products.title}</p>
            <p>{products.price}</p>
            <p>{products.description}</p>
            <p>{products.category.name}</p>

            <Image
              width={110}
              height={110}
              src={"https://upload.wikimedia.org/wikipedia/pt/f/f8/Taylor_Swift_-_Folklore.png"}
              className={styles.img}
            />
          </div>
        </div>
      )}

    </main>
  );
}
