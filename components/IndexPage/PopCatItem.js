import styles from "./PopCat.module.scss";
import Image from "next/image";
import Link from "next/link";

import dishes from "../../public/index-popular-categories/708x456_90.webp";
import beds from "../../public/index-popular-categories/708x456_90(1).webp";
import light from "../../public/index-popular-categories/708x456_90(2).webp";
import bedSheets from "../../public/index-popular-categories/708x456_90(3).webp";
import hallway from "../../public/index-popular-categories/708x456_90(4).webp";
import chairs from "../../public/index-popular-categories/708x456_90(5).webp";


const PopCatItem = () => {
  return (
    
      <div className={styles.catList}>
        <div className={styles.catItem}>
          <Link href="#">
            <div>
            <Image 
              src={dishes}
              width={200}
              height={130}
              alt="Image dishes" />
            </div>
            <div className={styles.catTitle}>
              <p className={styles.catText}>Посуда для сервировки</p>
            </div>
            </Link>
        </div>

        <div className={styles.catItem}>
          <Link href="#">
            <Image 
              src={beds}
              width={200}
              height={130}
              alt="Image dishes" />
            <div className={styles.catTitle}>
            <p className={styles.catText}>Кровати и матрасы</p>
            </div>
            </Link>
        </div>

        <div className={styles.catItem}>
          <Link href="#">
            <Image 
              src={light}
              width={200}
              height={130}
              alt="Image dishes" />
            <div className={styles.catTitle}>
            <p className={styles.catText}>Освещение</p>
            </div>
            </Link>
        </div>

        <div className={styles.catItem}>
          <Link href="#">
            <Image 
              src={bedSheets}
              width={200}
              height={130}
              alt="Image dishes" />
            <div className={styles.catTitle}>
            <p className={styles.catText}>Комплекты постельного белья</p>
            </div>
            </Link>
        </div>

        <div className={styles.catItem}>
          <Link href="#">
            <Image 
              src={hallway}
              width={200}
              height={130}
              alt="Image dishes" />
            <div className={styles.catTitle}>
            <p className={styles.catText}>Прихожая</p>
            </div>
            </Link>
        </div>

        <div className={styles.catItem}>
          <Link href="#">
            <Image 
              src={chairs}
              width={200}
              height={130}
              alt="Image dishes" />
            <div className={styles.catTitle}>
            <p className={styles.catText}>Барные стулья</p>
            </div>
            </Link>
        </div>
      </div>
  )
}

export default PopCatItem;