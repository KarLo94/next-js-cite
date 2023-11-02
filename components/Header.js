import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import { useState } from "react";

const Header = () => {
  let [isOpen, setOpen] = useState();
  let [isOpen1, setOpen1] = useState();

  // let [active, setActive] = useState(false);

  // function handleOpenClick() {
  //   setOpen(!isOpen);
  // }

  // function handleOpenClick2() {
  //   setOpen1(!isOpen1);
  // }

  let [isOpenDots, setIsOpenDots] = useState(false);

  return (
    <div>
      {/* Первая строка */}

      <div className={styles.firstRow}>
        <div className={`${styles.flex} ${styles.container}`}>
          <div className={styles.cityFlex}>
            <span>
              <Image
                src="image-page-header/mapmarker.svg"
                width={14}
                height={14}
                alt="map-marker"
              />
            </span>
            <span className={styles.cityText}>Калуга</span>
            <Image
              src="image-page-header/str.svg"
              width={10}
              height={10}
              alt="map-str"
            />
          </div>

          <nav className={styles.navList}>
            <ul className={styles.flex}>
              <a href="#" className={styles.navLink}>
                <li className={styles.navText}>Карьера в Hoff</li>
              </a>
              <a href="#" className={styles.navLink}>
                <li className={styles.navText}>Hoff №1 в России</li>
              </a>
              <a href="#" className={styles.navLink}>
                <li className={styles.navText}>
                  Адреса магазинов{" "}
                  <span className={styles.navLinkSpan}>24</span>
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

      <div className={`${styles.flex} ${styles.secondRow} ${styles.container}`}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="image-page-header/logo.svg"
            width={150}
            height={40}
            alt="Logo"
          />
        </Link>

        <div className={styles.secondRowCatalog}>
          <button
            onClick={() => setOpen((isOpen = !isOpen))}
            className={`${styles.secondRowCtlBtn} ${isOpen && styles.active}`}>
            <div className={styles.burger}>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </div>
            Каталог
            {isOpen && (
              <div className={styles.catalog}>
                <nav className={styles.catalogNav}>
                  <ul className={styles.catalogNavList}>
                    <li className={styles.catalogNavItem}>
                      tut budet spiski vs9kogo
                    </li>
                    <li className={styles.catalogNavItem}>
                      tut budet spiski vs9kogo
                    </li>
                    <li className={styles.catalogNavItem}>
                      tut budet spiski vs9kogo
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </button>
          <button
            className={`${styles.secondRowCtlBtn} ${isOpen1 && styles.active}`}
            onClick={() => setOpen1((isOpen1 = !isOpen1))}>
            <span className={styles.iconRooms}>
              <Image
                src="image-page-header/rooms.svg"
                width={20}
                height={20}
                alt="icon"
              />
            </span>
            Комнаты
            {isOpen1 && (
              <div className={styles.catalog}>
                <nav className={styles.catalogNav}>
                  <ul className={styles.catalogNavList}>
                    <li className={styles.catalogNavItem}>
                      tut budet spiski рррррррvs9kogo
                    </li>
                    <li className={styles.catalogNavItem}>
                      tut budet spiski рррррррррvs9kogo
                    </li>
                    <li className={styles.catalogNavItem}>
                      tut budet spiskiррррррррр vs9kogo
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </button>
        </div>

        <nav className={styles.secondRowNav}>
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

        {/* Icon second row */}

        <div className={styles.flex}>
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

      {/* Скрытые списки */}
      {/* <div className={`${styles.catalog} ${isOpen ? styles.opened : ""}`}>
        <nav className={styles.catalogNav}>
          <ul className={styles.catalogNavList}>
            <li className={styles.catalogNavItem}>tut budet spiski vs9kogo</li>
            <li className={styles.catalogNavItem}>tut budet spiski vs9kogo</li>
            <li className={styles.catalogNavItem}>tut budet spiski vs9kogo</li>
          </ul>
        </nav>
      </div>

      <div className={`${styles.catalog} ${isOpen1 ? styles.opened : ""}`}>
        <nav className={styles.catalogNav}>
          <ul className={styles.catalogNavList}>
            <li className={styles.catalogNavItem}>tut budet drugie spiski vs9kogo</li>
            <li className={styles.catalogNavItem}>tut budet drugie spiski vs9kogo</li>
            <li className={styles.catalogNavItem}>tut budet drugie spiski vs9kogo</li>
          </ul>
        </nav>
      </div> */}

      {/* Третья строка */}

      <div>
        <div className={`${styles.thirdRowLinkFlex} ${styles.container}`}>
          <div>
            <a href="#" className={`${styles.thirdRowLink} ${styles.firstLink}`}>
              <span>Цены пополам</span>
            </a>
            <a href="#" className={styles.thirdRowLink}>
              <span>Товары для дома</span>
            </a>
            <a href="#" className={styles.thirdRowLink}>
              <span>Диваны</span>
            </a>
            <a href="#" className={styles.thirdRowLink}>
              <span>Кровати</span>
            </a>
            <a href="#" className={styles.thirdRowLink}>
              <span>Кухни</span>
            </a>
            <a href="#" className={styles.thirdRowLink}>
              <span>Мебель для офиса</span>
            </a>
            <a href="#" className={styles.thirdRowLink}>
              <span>Мебель для детской</span>
            </a>
            <a href="#" className={styles.thirdRowLink}>
              <span>Ковры</span>
            </a>
            <a href="#" className={styles.thirdRowLink}>
              <span>%Акции</span>
            </a>
          </div>

          <button 
            onClick={() => setIsOpenDots(isOpenDots = !isOpenDots)}
            className={`${styles.thirdRowBtn} ${isOpenDots && 'activeDots'}`}>
              {isOpenDots && (
                <div>
                  <div className={styles.overlay}></div>
                  <div className={styles.dotsCard} onClick={e => e.stopPropagation()}>
                  <button className={styles.dotsBtn} onClick={() => setIsOpenDots(!isOpenDots)}>
                    <Image 
                    src="image-page-header/closes.svg"
                    width={15}
                    height={15}
                    alt="icon close"/>
                  </button>
                  <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Дом - это личное!</a>
                  <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Кешбэк 20% на гардеробные Оскар</a>
                  <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Всё по полочкам</a>
                  <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Лаборатория здорового сна Hoff</a>
                  <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Пора утепляться</a>
                  <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>0-0-12 на всё</a>
                  <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>0-0-24 на гардеробные</a>
                  <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>0-0-24 на кухни</a>
                  <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Бесплатная доставка товаров для дома</a>
                  <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Лучшая цена</a>
                  <a href="#" className={`${styles.thirdRowLink} ${styles.textDots}`}>Бесплатная сборка кухни!</a>
                  </div>
                
                </div>
              )}
            <span className={styles.dots}>. . .</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
