import styles from './CatologRooms.module.scss';
import Image from 'next/image';
import { useState } from "react";

const Catolog = () => {

  let [isOpen, setOpen] = useState(false);
  let [isOpen1, setOpen1] = useState();


  return (
    <>

      <div className={styles.secondRowCatalog}>
        <button
          onClick={() => setOpen((isOpen = !isOpen))}
          className={`${styles.secondRowCtlBtn} ${isOpen && styles.active}`}>
          <div className={styles.burger}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
          <p className={styles.none}>Каталог</p>
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
          className={`${styles.secondRowCtlBtn} ${styles.none} ${isOpen1 && styles.active}`}
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
    </>
  )
}

export default Catolog;