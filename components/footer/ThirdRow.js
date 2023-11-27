import styles from './ThirdRow.module.scss';
import Image from 'next/image';

const ThirdRow = () => {
  return (
    <>
      <div className={styles.footer__nav__banner}>
        <div className={styles.footer__nav__banner__content}>
          <div className={styles.footer__nav__banner__content__top}>
            <h3 className={styles.footer__nav__title}>
              {" "}
              Уют в доме - самое ценное
            </h3>
            <p className={styles.footer__nav__desc}>Подарочные карты</p>
            <button
              href="#"
              target="_blank"
              className={styles.footer__nav__btn}>Купить
            </button>
          </div>
          <div className={styles.footer__nav__banner__content__bottom}>
            <Image
              src="/image-page-footer/qr.webp"
              width={60}
              height={60}
              alt="Qr" />
            <div className={styles.footer__nav__banner__content__bottom__text}>
              <p className={styles.footer__nav__title__bot}>
                Любой номинал карты
              </p>
              <p className={styles.footer__nav__desc}>
                Когда не знаешь, что подарить
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.footer__nav__section} ${styles.order}`}>
        <h3 className={styles.footer__nav__name}>Наши услуги</h3>
        <ul className={styles.footer__nav__list}>
          <li className={styles.footer__nav__link}>
            <a href="#">Доставка и самовывоз</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Оплата и кредит</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Оплата частями</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Покупайте со Сбером</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Возврат и обмен</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Видеоконсультации</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Все услуги</a>
          </li>
        </ul>
      </div>

      <div className={`${styles.footer__nav__section} ${styles.order}`}>
        <h3 className={styles.footer__nav__name}>Планирование мебели</h3>
        <ul className={styles.footer__nav__list}>
          <li className={styles.footer__nav__link}>
            <a href="#">Конструктор шкафов</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Конфигуратор кроватей</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">
              Запись на планирование кухни и корпусной мебели
            </a>
          </li>
        </ul>
      </div>

      <div className={`${styles.footer__nav__section} ${styles.order}`}>
        <h3 className={styles.footer__nav__name}>Вдохновение</h3>
        <ul className={styles.footer__nav__list}>
          <li className={styles.footer__nav__link}>
            <a href="#">Блог Hoff</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Готовые дизайн-проекты</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Экспресс-дизайн</a>
          </li>
        </ul>
      </div>

      <div className={`${styles.footer__nav__section} ${styles.order}`}>
        <h3 className={styles.footer__nav__name}>Hoff для бизнеса</h3>
        <ul className={styles.footer__nav__list}>
          <li className={styles.footer__nav__link}>
            <a href="#">Стать поставщиком Hoff</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Корпоративным клиентам</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Дизайнерам интерьеров</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Вебмастерам</a>
          </li>
        </ul>
      </div>

      <div className={styles.footer__nav__section}>
        <h3 className={styles.footer__nav__name}>Всё о Hoff</h3>
        <ul className={styles.footer__nav__list}>
          <li className={styles.footer__nav__link}>
            <a href="#">О компании</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Работа и карьера в Hoff</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Правила применения рекомендательных технологий</a>
          </li>
        </ul>
      </div>

      <div className={styles.footer__nav__section}>
        <h3 className={styles.footer__nav__name}>Свяжитесь с нами</h3>
        <ul className={styles.footer__nav__list}>
          <li className={styles.footer__nav__link}>
            <a href="#">Контакты</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Адреса магазинов</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Напишите нам</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Сотрудничество с Hoff</a>
          </li>
        </ul>
      </div>

      <div className={styles.footer__nav__section}>
        <h3 className={styles.footer__nav__name}>Полезное от Hoff</h3>
        <ul className={styles.footer__nav__list}>
          <li className={styles.footer__nav__link}>
            <a href="#">Каталог товаров</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Подарочные карты</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Сертификат новосёлов</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Часто задаваемые вопросы</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Hoff бонус</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Все бренды</a>
          </li>
          <li className={styles.footer__nav__link}>
            <a href="#">Приложение Hoff</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className={styles.footer__nav__name}>Приложение Hoff</h3>
        <div className={styles.footer__app_link_cards}>
          <div className={styles.appStore}>
            <a
              target="_blank"
              href="https://apps.apple.com/ru/app/hoff-%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C-%D0%B8-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%BE%D0%BC%D0%B0/id1127606875?pid=website&c=footer&af_adset=store_icon_ios&af_channel=AR"
            >
              <Image
                src="/image-page-footer/app-store.png"
                width={150}
                height={46}
                alt="app store"
              />
            </a>
          </div>
          <div className={styles.appStore}>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=ru.hoff.app&pid=website&c=footer&af_adset=store_icon_android&af_channel=AR"
            >
              <Image
                src="/image-page-footer/google.png"
                width={150}
                height={46}
                alt="google play"
              />
            </a>
          </div>
          <div className={styles.appStore}>
            <a
              target="_blank"
              href="https://appgallery.huawei.com/app/C102874215?pid=website&c=footer&af_adset=store_icon_huawei&af_channel=AR"
            >
              <Image
                src="/image-page-footer/app-gallery.png"
                width={150}
                height={46}
                alt="app gallery"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThirdRow;