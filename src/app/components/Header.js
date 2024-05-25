import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.cabecalho}>

            <nav className={styles.navbar}>

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
                    <img width={18} height={18} className={styles.icon} src="https://img.icons8.com/ios-glyphs/30/search--v1.png"/>
                    <input className={styles.input} type="text" placeholder="Pesquisar"></input>
                </div>
            </nav>
        </header>
    );

}