import Head from 'next/head'
import Image from 'next/image'
import Heading from '../components/Heading';
import styles from '/styles/Home.module.scss';
import SwiperBanner from '../components/Swiper/SwiperBanner';
import PopularCategories from '@/components/IndexPage/PopularCategories';



const Home = () => {
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

         <SwiperBanner />

         <PopularCategories />

       </div>
  
  
     </main>
   </>
  )
}

export default Home;
