import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.cabecalho}>

            <nav className={styles.navbar}>
                <div className={styles.navbar_link}>
                    <Link href="/">
                        Home
                    </Link>
                </div>

            </nav>
        </header>
    );

}