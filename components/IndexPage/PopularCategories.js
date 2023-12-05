import Heading from "../Heading";
import styles from "./PopCat.module.scss";
import PopCatItem from "./PopCatItem";
import Buttons from "../Buttons/Button";

const PopularCategories = () => {
  return (
    <div className={styles.sectionPopCat}>
      <Heading tag="h2" text="Популярные категории" />

      

        <PopCatItem />
        <div className={styles.btnFlex}>
           {/* Не работают ссылки */}
          <Buttons color = "red" href="#" text="Каталог товаров"/>
          <Buttons color="grey" text="Какая нибудь яботня" href="#"/>

        </div>

     

    </div>
  )
}

export default PopularCategories;