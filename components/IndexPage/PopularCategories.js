import Heading from "../Heading";
import styles from "./PopCat.module.scss";
import PopCatItem from "./PopCatItem";
import Buttons from "../Buttons/Button";

const PopularCategories = () => {
  return (
    <div className={styles.sectionPopCat}>
      <Heading tag="h2" text="Популярные категории" />

      <div className={styles.popCatFlex}>

        <PopCatItem />
        <div className={styles.btnFlex}>
{/* Не работают ссылки */}
          <Buttons href="#" text="Каталог товаров"/>
          <Buttons text="Каталог товаров" href="#"/>

        </div>

      </div>

    </div>
  )
}

export default PopularCategories;