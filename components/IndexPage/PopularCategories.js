import Heading from "../Heading";
import styles from "./PopCat.module.scss";
import PopCatItem from "./PopCatItem";
import Buttons from "../Buttons/Buttons";

const PopularCategories = () => {
  return (
    <div className={styles.sectionPopCat}>
      <Heading tag="h2" text="Популярные категории" />

      <div className={styles.popCatFlex}>

        <PopCatItem />
        <Buttons />

      </div>

    </div>
  )
}

export default PopularCategories;