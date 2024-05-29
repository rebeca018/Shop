import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.redes}>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>TikTok</li>
                    <li>Telegram</li>
                </ul>
            </div>

            <div className={styles.logo}>
                    <Image
                        width={30}
                        height={30}
                        src={"https://img.icons8.com/ultraviolet/40/shop.png"}
                    />
                    <p>Criada em 19/08/2008</p>
            </div>
        </footer>
    )
}