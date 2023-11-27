import City from '../header/City';
import styles from './Copyright.module.scss';

const Copyright = () => {
  return (
    <>
      <div className={styles.footer__copyright__wrapper}>
        <div className={styles.footer__copyright__city}>
          <City />
        </div>

        <div>
          <div className={styles.footer__copyright__links}>
            <a href="#" className={styles.footer__copyright__links__item}>Правила пользования сайтом</a>
            <a href="#" className={styles.footer__copyright__links__item}>Политика обработки персональных данных</a>
            <a href="#" className={styles.footer__copyright__links__item}>Правила торговли</a>
            <a href="#" className={styles.footer__copyright__links__item}>Карта сайта</a>
          </div>
          <div className={styles.footer__copyright__laureat__info}>
            *Hoff —
            <a href="#" target="_blank" className={styles.link}>лауреат ежегодной Премии доверия потребителей</a>
            «Марка № 1 в России» в 2022 году в категории «Гипермаркет мебели и товаров для дома» по результатам голосования потребителей на основании критериев известности и воспринимаемого качества.
            <a href="#" target="_blank" className={styles.link}>Подробнее</a>
          </div>
          <div className={styles.footer__copyright__legal__address}>
            ООО «Домашний Интерьер», ОГРН: 1077763747269<br></br>
            123290, г. Москва, 1-й Магистральный проезд, д.11, стр.1, пом. II, этаж 2, ком. 54
          </div>
          <div className={styles.footer__copyright__date}>
            © Ноff, 2009—2023
          </div>
        </div>
      </div>
    </>
  )
}

export default Copyright;