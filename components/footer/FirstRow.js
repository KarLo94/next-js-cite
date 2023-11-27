import styles from './FirstRow.module.scss';
import Image from "next/image";

const FirstRow = () => {
  return (
    <>
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
    </>
  )
}

export default FirstRow;