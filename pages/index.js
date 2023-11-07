import Head from 'next/head'
import Image from 'next/image'
import Heading from '../components/Heading'

import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/Home.module.scss'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export default function Home() {
  return (

     <>
      <Head>
        <title>ЭТО МОЙ Hoff: гипермаркет мебели и товаров для дома, интернет-магазин мебели</title>
        <meta name="description" content="Мебель и товары для дома в интернет-магазине HOFF. 🚚 Быстрая доставка по Москве, Санкт-Петербургу и всей России. Широкий ассортимент, более 50 000 товаров ✔️ Самовывоз товаров для дома из наших магазинов или пункта выдачи в вашем городе (для заказов весом до 20 кг)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.main__banner}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,}}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide><a href='#'><Image src='/image-index/2000x676_75.webp'
              width={1499} height={506} alt='swiper image' /></a></SwiperSlide>
            <SwiperSlide><a href='#'><Image src='/image-index/2000x676_75(1).webp'
              width={1499} height={506} alt='swiper image' /></a></SwiperSlide>
            <SwiperSlide><a href='#'><Image src='/image-index/2000x676_75(2).webp'
              width={1499} height={506} alt='swiper image' /></a></SwiperSlide>
            <SwiperSlide><a href='#'><Image src='/image-index/2000x676_75(3).webp'
              width={1499} height={506} alt='swiper image' /></a></SwiperSlide>
            <SwiperSlide><a href='#'><Image src='/image-index/2000x676_75(4).webp'
              width={1499} height={506} alt='swiper image' /></a></SwiperSlide>
            <SwiperSlide><a href='#'><Image src='/image-index/2000x676_75(5).webp'
              width={1499} height={506} alt='swiper image' /></a></SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  )
}
