import City from './City';
import styles from './FirstRow.module.scss';

const FirstRow = () => {
  return (

        <div className={styles.flex}> 
          <City />

          <nav className={styles.navList}>
            <ul className={styles.flexNav}>
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
  )
}

export default FirstRow;