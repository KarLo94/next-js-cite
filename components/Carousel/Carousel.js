import styles from "././Carousel.module.scss";
import Heading from "../Heading";
import Card from "../Cards/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavBtns } from './../Swiper/SwiperNavBtns';

import 'swiper/scss';


import {Navigation } from 'swiper/modules';


const Carousel = () => {
  return (
    <div>
      <Heading tag="h2" text="Начните покупать" />

      <div className={styles.sectionCarousel}>

        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          centeredSlides={true}
          loop={false}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1920: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          
          modules={[Navigation]} className="mySwiper">

        <SwiperSlide ><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide ><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide ><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide ><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide ><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>


      <SwiperNavBtns />
      
    </Swiper>

        
      </div>
    </div>
  )
}

export default Carousel;