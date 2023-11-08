import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavBtns } from './SwiperNavBtns';
import  SwiperPaginat  from './SwiperPaginat';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Scrollbar } from 'swiper/modules';

const SwiperBanner = () => {

  return (

    <Swiper
      spaceBetween={1}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
        el: '.swiperPagBul',
        bulletClass: 'swiperScrollbar',
        bulletActiveClass: 'swiper-scrollbar-drag',
      //   renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + '</span>';
      // }
        }}
        // scrollbar={{
        //   el: '.swiperScroll',
        //    draggable: true, dragSize: 24  }}
       navigation={true}
      modules={[Autoplay, Pagination, Navigation, Scrollbar]} className="mySwiper">

      <SwiperSlide ><a href='#'><Image className={styles.imgBan} src='/image-index/2000x676_75.webp'
        width={1499} height={506} alt='swiper image' /></a></SwiperSlide>
      <SwiperSlide><a href='#'><Image className={styles.imgBan} src='/image-index/2000x676_75(1).webp'
        width={1499} height={506} alt='swiper image' /></a></SwiperSlide>
      <SwiperSlide><a href='#'><Image className={styles.imgBan} src='/image-index/2000x676_75(2).webp'
        width={1499} height={506} alt='swiper image' /></a></SwiperSlide>
      <SwiperSlide><a href='#'><Image className={styles.imgBan} src='/image-index/2000x676_75(3).webp'
        width={1499} height={506} alt='swiper image' /></a></SwiperSlide>
      <SwiperSlide><a href='#'><Image className={styles.imgBan} src='/image-index/2000x676_75(4).webp'
        width={1499} height={506} alt='swiper image' /></a></SwiperSlide>
      <SwiperSlide><a href='#'><Image className={styles.imgBan} src='/image-index/2000x676_75(5).webp'
        width={1499} height={506} alt='swiper image' /></a></SwiperSlide>

      <SwiperNavBtns />
      <SwiperPaginat />
      
    </Swiper>
  
  )
}

export default SwiperBanner;