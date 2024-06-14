import Image from "next/image";
import styles from "./spinner.module.css"
export default function Spinner() {
    return(
        <div className={styles.div}>
            <Image
                width={50}
                height={50}
                src="eclipse-half.svg"
                alt="Imagem carregando"
                className={styles.img}
            />
        </div>
    );
}