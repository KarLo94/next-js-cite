
import styles from '../../styles/Home.module.scss';


const SwiperPaginat = () => {

  return (
    <div className={styles.swiperScrollCont}>
      <span className={styles.swiperScrollbar}></span>
      <span className={styles.swiperScrollbar}></span>
      <span className={styles.swiperScrollbar}></span>
      <span className={styles.swiperScrollbar}></span>
      <span className={styles.swiperScrollbar}></span>
      <span className={styles.swiperScrollbar}></span>
    </div>
  )
}

export default SwiperPaginat;

// const SwiperPaginat = () => { 

//   const swiper = new Swiper('.swiper', {
//     speed: 400,
//     spaceBetween: 100,
//   });

// return (

//   <div className={styles.swiperScrollCont}></div>

// )

// }

// export default SwiperPaginat;