import styles from './City.module.scss';
import Image from 'next/image';

const City = () => {
  return (
    <>
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
    </>
  )
}

export default City;