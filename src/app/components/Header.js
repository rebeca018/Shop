import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.cabecalho}>

            <nav className={styles.navbar}>

                <div className={styles.img}>
                    <Image
                        width={30}
                        height={30}
                        src={"https://img.icons8.com/ultraviolet/40/shop.png"}
                    />
                </div>

                <div className={styles.navbar_link}>
                    <p>Fake Store API</p>
                </div>

                <div className={styles.img}>
                    <Image
                        width={30}
                        height={30}
                        src={"https://img.icons8.com/windows/32/shopping-cart.png"}
                    />
                </div>

                <div className={styles.navbar_link}>
                    <button className={styles.botao}>Novo produto</button>
                </div>

                <div className={styles.navbar_link}>
                    <p>A melhor loja para as suas compras</p>
                </div> 
            </nav>
            
        </header>
    );

}