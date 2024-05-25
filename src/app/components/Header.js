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

                <div className={styles.navbar_link}>
                    <p>Home</p>
                </div>

                <div className={styles.navbar_link}>
                    <p>Cadastrar</p>
                </div>

                <div className={styles.navbar_link}>
                    <p>Produtos</p>
                </div> 
                <div className={styles.custom_input}>
                    <Image
                        width={18}
                        height={18}
                        className={styles.icon}
                        src={"https://img.icons8.com/office/16/search--v1.png"}
                    />
                    <input className={styles.input} type="text" placeholder="Pesquisar"></input>
                </div>
            </nav>
            
        </header>
    );

}