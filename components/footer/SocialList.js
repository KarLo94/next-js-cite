import styles from './SocialList.module.scss';
import Image from 'next/image';

const SocialList = () => {
  return (
    <>
      <div className={styles.footer__app_link_cards}>
        <div className={styles.appStore}>
          <a
            target="_blank"
            href="https://apps.apple.com/ru/app/hoff-%D0%BC%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C-%D0%B8-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D1%8B-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%BE%D0%BC%D0%B0/id1127606875?pid=website&c=footer&af_adset=store_icon_ios&af_channel=AR"
          >
            <Image className={styles.imgIcon}
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
            <Image className={styles.imgIcon}
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
            <Image className={styles.imgIcon}
              src="/image-page-footer/app-gallery.png"
              width={150}
              height={46}
              alt="app gallery"
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default SocialList;