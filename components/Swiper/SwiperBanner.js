import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavBtns } from './SwiperNavBtns';

import 'swiper/scss';
import 'swiper/scss/pagination';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
         clickable: true,}}
       navigation={true}
      modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
      <SwiperSlide><a href='#'><Image className={styles.imgBan} src='/image-index/2000x676_75.webp'
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
    </Swiper>
  
  )
}

export default SwiperBanner;