import styles from './SecondRow.module.scss';
import Link from "next/link";
import Image from "next/image";
import CatalogRooms from './CatologRooms';

const SecondRow = () => {

  return (
    <div className={styles.flex}>
      <Link href="/" className={styles.logoLink}>
        <Image className={styles.imgLogo}
          src="image-page-header/logo.svg"
          width={150}
          height={40}
          alt="Logo"
        />
      </Link>

      <CatalogRooms />

      <nav className={styles.secondRowNav}>
        <a href="/" className={`${styles.secondRowNavItm} ${styles.none}`}>Главная</a>
        <a href="#" className={styles.secondRowNavItm}>
          Идеи
        </a>
        <a href="#" className={styles.secondRowNavItm}>
          Скидки
        </a>
        <a href="#" className={styles.secondRowNavItm}>
          Услуги
        </a>
      </nav>

      <div className={styles.searchContainer}>
        <input
          type="search"
          name="input-search"
          className={styles.search}
          placeholder="Поиск"
        ></input>
        <button type="button" aria-label="Найти" className={styles.searchBtn}>
          <Image src="image-page-header/search.svg" width={22} height={22} />
        </button>
      </div>

      <div className={styles.flexBtn}>
        <a href="#" className={styles.btn}>
          <span className={styles.icon}>
            <svg
              className={styles.iconFavorite}
              data-v-efadd23f=""
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#000"
              viewBox="0 0 20 18"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13.7 1C16.87 1 19 3.98 19 6.76 19 12.39 10.16 17 10 17c-.16 0-9-4.61-9-10.24C1 3.98 3.13 1 6.3 1c1.82 0 3.01.91 3.7 1.71.69-.8 1.88-1.71 3.7-1.71Z"
              ></path>
            </svg>
            <span className={`${styles.iconCount} ${styles.iconEmpty}`}>
              0
            </span>
          </span>
          <div className={styles.text}>Избранное</div>
        </a>

        <a href="#" className={styles.btn}>
          <span className={styles.icon}>
            <svg
              className={styles.iconAccount}
              data-v-efadd23f=""
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#000"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14.817 4.167A3.984 3.984 0 1 1 9.183 9.8a3.984 3.984 0 0 1 5.634-5.634ZM12 14.008c4.554 0 9 1.967 9 4.992v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1c0-3.026 4.446-4.992 9-4.992Z"
              ></path>
            </svg>
          </span>
          <div className={styles.text}>Войти</div>
        </a>

        <a href="#" className={styles.btn}>
          <span className={styles.icon}>
            <svg
              data-v-efadd23f=""
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#000"
              viewBox="0 0 32 33"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m8.46 8.834-.89-4H4.998m5.81 14.946L8.46 8.835h16.877c.85 0 1.482.783 1.304 1.613l-2.002 9.334a1.333 1.333 0 0 1-1.304 1.053H12.11c-.628 0-1.17-.439-1.303-1.053Z"
              ></path>
              <path
                fill="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M23.786 25.666a.5.5 0 1 0 .006 1 .5.5 0 0 0-.006-1Z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.308 25.666c-.276 0-.5.224-.497.5a.498.498 0 1 0 .998 0 .5.5 0 0 0-.501-.5"
              ></path>
            </svg>
            <span className={`${styles.iconCount} ${styles.iconEmpty}`}>
              0
            </span>
          </span>
          <div className={styles.text}>Корзина</div>
        </a>
      </div>
    </div>
  )
}

export default SecondRow;