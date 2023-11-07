import { useSwiper } from 'swiper/react';
import styles from '../../styles/Home.module.scss';

export const SwiperNavBtns= () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button className={`${styles.bannerBtn} ${styles.prev}`} onClick={() => swiper.slidePrev()}></button>
      <button className={`${styles.bannerBtn} ${styles.next}`} onClick={() => swiper.slideNext()}></button>
    </div>
  );
};