import styles from './ThirdRow.module.scss';
import Image from 'next/image';
import { useState } from "react";

const ThirdRow = () => {
  let [isOpenDots, setIsOpenDots] = useState(false);

  return (
    <>
      <div className={styles.flex}>
        <div>
          <a href="#" className={`${styles.thirdRowLink} ${styles.firstLink}`}>
            <span>Цены пополам</span>
          </a>
          <a href="#" className={styles.thirdRowLink}>
            <span>Товары для дома</span>
          </a>
          <a href="#" className={styles.thirdRowLink}>
            <span>Диваны</span>
          </a>
          <a href="#" className={styles.thirdRowLink}>
            <span>Кровати</span>
          </a>
          <a href="#" className={styles.thirdRowLink}>
            <span>Кухни</span>
          </a>
          <a href="#" className={styles.thirdRowLink}>
            <span>Мебель для офиса</span>
          </a>
          <a href="#" className={styles.thirdRowLink}>
            <span>Мебель для детской</span>
          </a>
          <a href="#" className={styles.thirdRowLink}>
            <span>Ковры</span>
          </a>
          <a href="#" className={styles.thirdRowLink}>
            <span>%Акции</span>
          </a>
        </div>

        <button
          onClick={() => setIsOpenDots(isOpenDots = !isOpenDots)}
          className={`${styles.thirdRowBtn} ${isOpenDots && 'activeDots'}`}>
          {isOpenDots && (
            <div>
              <div className={styles.overlay}></div>
              <div className={styles.dotsCard} onClick={e => e.stopPropagation()}>
                <button className={styles.dotsBtn} onClick={() => setIsOpenDots(!isOpenDots)}>
                  <Image
                    src="image-page-header/closes.svg"
                    width={15}
                    height={15}
                    alt="icon close" />
                </button>
                <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Дом - это личное!</a>
                <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Кешбэк 20% на гардеробные Оскар</a>
                <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Всё по полочкам</a>
                <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Лаборатория здорового сна Hoff</a>
                <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Пора утепляться</a>
                <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>0-0-12 на всё</a>
                <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>0-0-24 на гардеробные</a>
                <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>0-0-24 на кухни</a>
                <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Бесплатная доставка товаров для дома</a>
                <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Лучшая цена</a>
                <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Бесплатная сборка кухни!</a>
              </div>

            </div>
          )}
          <span className={styles.dots}>. . .</span>
        </button>
      </div>
    </>
  )
}

export default ThirdRow;