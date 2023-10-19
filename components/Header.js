import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useState } from "react";



const Header = () => {

  const [isOpen, setOpen] = useState();
  const [isOpen1, setOpen1] = useState();

  return (
  
  <div>
    {/* Первая строка */}

    <div className={styles.allFirstRow}>
      <div className={styles.flex}>
        <div>
          <span>
            <Image
              src="image-page-header/mapmarker.svg"
              width={14}
              height={14}
              alt="map-marker"
            />
          </span>
          <span className={styles.cityText}>Калуга</span>
        </div>

        <nav>
          <ul className={styles.flex}>
            <a href="#" className={styles.navLink}>
              <li className={styles.navText}>Карьера в Hoff</li>
            </a>
            <a href="#" className={styles.navLink}>
              <li className={styles.navText}>Hoff №1 в России</li>
            </a>
            <a href="#" className={styles.navLink}>
              <li className={styles.navText}>
                Адреса магазинов <span>24</span>
              </li>
            </a>
            <a href="#" className={styles.navLink}>
              <li className={styles.navText}>Доставка и оплата</li>
            </a>
            <a href="#" className={styles.navLink}>
              <li className={styles.navText}>Пункты выдачи</li>
            </a>
            <a href="#" className={styles.navLink}>
              <li className={styles.navText}>Hoff бонус</li>
            </a>
          </ul>
        </nav>

        <div>
          <a href="tel:+74842212453" className={styles.navPhone}>
            +7 (484) 221-24-53
          </a>
        </div>
      </div>
    </div>

    {/* Вторая строка */}

    <div className={`${styles.flex} ${styles.twoRow}`}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="image-page-header/logo.svg"
          width={150}
          height={40}
          alt="Logo"
        />
      </Link>

      <div className={styles.twoRowCatalog}>
        <button className={styles.twoRowCtlBtn} onClick={() => setOpen(!isOpen) }>
          <div className={styles.burger}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
          Каталог
        </button>
        <button className={styles.twoRowCtlBtn} onClick={() => setOpen1(!isOpen1) }>
          <span className={styles.iconRooms}>
            <Image src="image-page-header/rooms.svg"
            width={20}
            height={20}
            alt="icon"/>
          </span>
          Комнаты</button>
      </div>

      


      <nav className={styles.twoRowNav}>
        <a href="#" className={styles.twoRowNavItm}>
          Идеи
        </a>
        <a href="#" className={styles.twoRowNavItm}>
          Скидки
        </a>
        <a href="#" className={styles.twoRowNavItm}>
          Услуги
        </a>
      </nav>

      <div>
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
      </div>

      <div className={styles.flex}>
        <a href="#" className={styles.btn}>
          <span className={styles.icon}>
            <Image
              src="image-page-header/favorites.svg"
              width={26}
              height={24}
              alt="icon-favorites"
            />
            <span className={`${styles.iconCount} ${styles.iconEmpty}`}>0</span>
          </span>
          <div>Избранное</div>
        </a>

        <a href="#" className={styles.btn}>
          <span className={styles.icon}>
            <Image
              src="image-page-header/account.svg"
              width={30}
              height={30}
              alt="icon-account"
            />
          </span>
          <div>Войти</div>
        </a>

        <a href="#" className={styles.btn}>
          <span className={styles.icon}>
            <Image
              src="image-page-header/basket.svg"
              width={32}
              height={32}
              alt="icon-basket"
            />
            <span className={`${styles.iconCount} ${styles.iconEmpty}`}>0</span>
          </span>
          <div>Корзина</div>
        </a>
      </div>
    </div>

              {/* Скрытые списки */}
    <div className={`${styles.katalog} ${isOpen ? styles.opened : ""}`}>
      <nav className={styles.katalogNav}>
        <ul className={styles.katalogNavList}>
          <li className={styles.katalogNavItem}>tut budet spiski vs9kogo</li>
          <li className={styles.katalogNavItem}>tut budet spiski vs9kogo</li>
          <li className={styles.katalogNavItem}>tut budet spiski vs9kogo</li>
        </ul>
      </nav>
    </div>      

    <div className={`${styles.katalog} ${isOpen1 ? styles.opened : ""}`}>
      <nav className={styles.katalogNav}>
        <ul className={styles.katalogNavList}>
          <li className={styles.katalogNavItem}>tut budet drugie spiski vs9kogo</li>
          <li className={styles.katalogNavItem}>tut budet drugie spiski vs9kogo</li>
          <li className={styles.katalogNavItem}>tut budet drugie spiski vs9kogo</li>
        </ul>
      </nav>
    </div>      

    



    {/* Третья строка */}

    <div>
      <div className={styles.threeRowLinkFlex}>
        <div>
          <a href="#" className={styles.threeRowLink}>
            <span>Цены пополам</span>
          </a>
          <a href="#" className={styles.threeRowLink}>
            <span>Товары для дома</span>
          </a>
          <a href="#" className={styles.threeRowLink}>
            <span>Диваны</span>
          </a>
          <a href="#" className={styles.threeRowLink}>
            <span>Кровати</span>
          </a>
          <a href="#" className={styles.threeRowLink}>
            <span>Кухни</span>
          </a>
          <a href="#" className={styles.threeRowLink}>
            <span>Мебель для офиса</span>
          </a>
          <a href="#" className={styles.threeRowLink}>
            <span>Мебель для детской</span>
          </a>
          <a href="#" className={styles.threeRowLink}>
            <span>Ковры</span>
          </a>
          <a href="#" className={styles.threeRowLink}>
            <span>%Акции</span>
          </a>
        </div>

        <button className={styles.threeRowBtn}>
          <span className={styles.dots}>. . .</span>
        </button>
      </div>
    </div>
  </div>

  )

 }

export default Header;





