import styles from "./page.module.css"
import Image from "next/image";
export default async function Product({params}){
    const response = await fetch("https://fakestoreapi.com/products/" + params.id);
    const data = await response.json();

    return(
        <main className={styles.main}>
            <div className={styles.card}>
              <Image
                width={220}
                height={220}
                src={data.image}
                className={styles.img}
              />
  
              <p>{data.title}</p>
              <p>{data.price}</p>
              <p>{data.description.slice(0, 110)}</p>
              <p>{data.category}</p>
              <p>{data.rating.count}</p>

            </div>
      </main>
        
    )
}