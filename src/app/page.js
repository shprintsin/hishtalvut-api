import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
     
        <div>
         

           <p>Backend api for Hishtalvut</p>
     
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Hishtalvut"
          width={380}
          height={150}
          priority
        />
      </div>

      <div className={styles.grid}>
       
       
        
      </div>
    </main>
  );
}
