import styles from './FirstRow.module.scss';
import Image from "next/image";
import SocialList from './SocialList';

const FirstRow = () => {
  return (
    <>
      <div className={styles.footer__app_block}>
          <div className={styles.footer__app_link}>
            <p className={styles.footer__app_link_text}>
              Примерьте вашу новую мебель к интерьеру
            </p>
            <SocialList />
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