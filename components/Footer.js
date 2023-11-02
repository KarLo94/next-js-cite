import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import { useState } from "react";

const Footer = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      {/* // Картинка и ссылки */}
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer__app_block}>
            <div className={styles.footer__app_link}>
              <p className={styles.footer__app_link_text}>
                Примерьте вашу новую мебель к интерьеру
              </p>
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

            <div>
              <Image
                className={styles.footer__app_img}
                src="/image-page-footer/phone.webp"
                width={200}
                height={248}
                alt="img phone"
              />
            </div>

            <div className={styles.footer__qr_card}>
              <Image
                src="/image-page-footer/qr.webp"
                width={156}
                height={156}
                alt="qr"
              />
              <p className={styles.footer_qr_text}>
                Отсканируйте QR-код и пользуйтесь приложением
              </p>
            </div>
          </div>
        </div>

        {/* // Подписка с формой */}

        <div className={styles.subscribe}>
          <div className={`${styles.container} ${styles.subscribe__container}`}>
            <div className={styles.subscribe__text}>
              Получите купон номиналом 500₽ в подарок за подписку
            </div>

            {/* Форма */}
            <div className={styles.subscribe__form}>
              <div className={styles.subscribe__form_input}>
                <div className={styles.tooltip}>
                  <span className={styles.tooltipText}>
                    Введите действительный адрес электронной почты
                  </span>
                </div>
                <div className={styles.input_f}>
                  <div className={styles.subscribe__input_container}>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="off"
                      placeholder="Введите ваш e-mail"
                      enterKeyHint=""
                      className={styles.subscribe__input}
                    ></input>
                  </div>
                  <div className={styles.agreement}>
                    <label className={styles.check}>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        className={styles.checkbox_main_item}
                      ></input>
                      <span className={styles.check__box}></span>
                      <span className={styles.checkbox_span}>
                        Настоящим даю согласие на рассылку
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={`${styles.form_btn} ${
                  checked && styles.form_btn_active
                }`}
              >
                Подписаться
              </button>
            </div>

            {/* Соц сети */}
            <div className={styles.subscribe__social_list}>
              <div className={styles.subscribe__social_list_flex}>
                <div className={styles.subscribe__social_item}>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/user/HoffRussia"
                  >
                    <Image
                      src="/image-page-footer/youtube.svg"
                      width={24}
                      height={24}
                      alt="YouTube"
                    />
                  </a>
                </div>
                <div className={styles.subscribe__social_item}>
                  <a target="_blank" href="https://vk.com/hoffrus">
                    <Image
                      src="/image-page-footer/vk.svg"
                      width={24}
                      height={24}
                      alt="VK"
                    />
                  </a>
                </div>
                <div className={styles.subscribe__social_item}>
                  <a target="_blank" href="https://t.me/hoff_inspiration">
                    <Image
                      src="/image-page-footer/telegram.svg"
                      width={24}
                      height={24}
                      alt="Telegram"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Навигации */}
      <div>
        <div className={styles.footer__nav}>
          <div className={`${styles.container} ${styles.footer__nav__flex}`}>
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
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <div className={styles.footer__copyright}>
        <div className={styles.container}>
          <div className={styles.footer__copyright__wrapper}>
            <div className={styles.footer__copyright__city}>
            <div className={styles.cityFlex}>
              <Image className={styles.footer__copyright__city__img1}
                src="image-page-footer/marker.svg"
                width={24}
                height={24}
                alt="map-marker"
              />
            <span className={styles.cityText}>Калуга</span>
            <Image className={styles.footer__copyright__city__img2}
              src="image-page-header/str.svg"
              width={10}
              height={10}
              alt="map-str"
            />
            </div>
            </div>
            
            <div>
              <div className={styles.footer__copyright__links}>
                <a href="#" className={styles.footer__copyright__links__item}>Правила пользования сайтом</a>
                <a href="#" className={styles.footer__copyright__links__item}>Политика обработки персональных данных</a>
                <a href="#" className={styles.footer__copyright__links__item}>Правила торговли</a>
                <a href="#" className={styles.footer__copyright__links__item}>Карта сайта</a>
              </div>
              <div className={styles.footer__copyright__laureat__info}>
                *Hoff — 
                <a href="#" target="_blank"className={styles.link}>лауреат ежегодной Премии доверия потребителей</a>
                «Марка № 1 в России» в 2022 году в категории «Гипермаркет мебели и товаров для дома» по результатам голосования потребителей на основании критериев известности и воспринимаемого качества.   
                <a href="#" target="_blank"className={styles.link}>Подробнее</a>
              </div>
              <div className={styles.footer__copyright__legal__address}>
                ООО «Домашний Интерьер», ОГРН: 1077763747269<br></br>
                123290, г. Москва, 1-й Магистральный проезд, д.11, стр.1, пом. II, этаж 2, ком. 54
              </div>
              <div className={styles.footer__copyright__date}>
              © Ноff, 2009—2023
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Footer;
