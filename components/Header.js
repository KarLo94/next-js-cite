import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => (
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
          {/* <svg> 

          </svg> */}
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
        <Image src=''
        width={150}
        height={40}
        alt="Logo" />
      </Link>

      <div className={styles.twoRowMenuBtn}>
        <button className={styles.twoRowBtn}>Каталог</button>
        <button className={styles.twoRowBtn}>Комнаты</button>
      </div>

      <nav className={styles.twoRowNav}>
        <a href="#" className={styles.twoRowNavItm}>Идеи</a>
        <a href="#" className={styles.twoRowNavItm}>Скидки</a>
        <a href="#" className={styles.twoRowNavItm}>Услуги</a>
      </nav>

      <div>
        <div>Input</div>
        <button>O</button>
      </div>

      <div className={styles.flex}>
        <a href="#" className={styles.btn}>
          <span>Icon</span>
          <div>Избранное</div>
        </a>
        <div>Войти</div>
        <a href="#">
          <span></span>
          <div>Корзина</div>
        </a>
      </div>
    </div>

    {/* Третья строка */}

    <div>
      <div className={styles.threeRowLinkFlex}>
        <div >
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
);

export default Header;
