import Heading from "../Heading";
import styles from "./PopCat.module.scss";
import PopCatItem from "./PopCatItem";
import Buttons from "../Buttons/Button";
import Link from "next/link";

const PopularCategories = () => {
  return (
    <div className={styles.sectionPopCat}>
      <Heading tag="h2" text="Популярные категории" />

      

        <PopCatItem />
        <div className={styles.btnFlex}>
          <Link href="#">
          <Buttons color="red" text="Каталог товаров"/>
          </Link>

        </div>

     

    </div>
  )
}

export default PopularCategories;