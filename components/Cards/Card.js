import styles from "./Card.module.scss";
import Image from "next/image";

import Img from "../../public/Безназвания.jpg";

const Card = () => {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.imgLink}>
        <Image 
          src={Img}
          width={225}
          height={157}
          alt="rf"/>
      </a>
      <div className={styles.price}>
        1234 <span>₽</span>
      </div>
      <div className={styles.name}>
        <a href="#">Название товара</a>
      </div>
  
        <div className={styles.reviewsBlock}>
          <div className={styles.reviewsStars}>
            4.5
          </div>
          <div className={styles.reviewsDec}>

          </div>
          <a href="#" className={styles.itemRev}>
            3 отзыва
          </a>
        </div>
        <a href="#"></a>
      <div className={styles.action}>
        <a href="#" className={styles.actionText}>Подробнее</a>
        <button className={styles.cardBtn}>
          <Image className={styles.imgBasket} src="image-page-header\basket.svg"
          width={28}
          height={28}
          alt="icon Basket"/>
        </button>
      </div>
    </div>
  )
}

export default Card;