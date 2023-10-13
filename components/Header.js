import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => (
  <div>

       {/* Первая строка */}

    <div className={styles.firstRow}>
      <div>
        <div className={styles.flex}>
          <div>
            <span>
              <Image src="image-page-header/mapmarker.svg"
              width={14}
              height={14}
              alt="map-marker"/>
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
            <a href="tel:+74842212453" className={styles.navPhone}>+7 (484) 221-24-53 </a>
          </div>
        </div>
      </div>
    </div>

        {/* Вторая строка */}

    <div className={styles.flex}>
      <Link href="/">Logo</Link>
      <div>
        <button>Каталог</button>
        <button>Комнаты</button>
      </div>
      <nav>
        <a href="#">Идеи</a>
        <a href="#">Скидки</a>
        <a href="#">Услуги</a>
      </nav>
      <div>
        <div>Input</div>
        <button>O</button>
      </div>
      <div className={styles.flex}>
        <a href="#">
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

    <div >
      <div className={styles.flex}>
        <div >
          <a href="#">
            <span>Цены пополам</span>
          </a>
          <a href="#">
            <span>Товары для дома</span>
          </a>
          <a href="#">
            <span>Диваны</span>
          </a>
          <a href="#">
            <span>Кровати</span>
          </a>
          <a href="#">
            <span>Кухни</span>
          </a>
          <a href="#">
            <span>Мебель для офиса</span>
          </a>
          <a href="#">
            <span>Мебель для детской</span>
          </a>
          <a href="#">
            <span>Ковры</span>
          </a>
          <a href="#">
            <span>%Акции</span>
          </a>
        </div>
        <button>
          <span>...</span>
        </button>
      </div>
    </div>


  </div>
);

export default Header;
