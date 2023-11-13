import styles from "././Carousel.module.scss";
import Heading from "../Heading";

import Card from "../Cards/Card";

const Carousel = () => {
  return (
    <div>
      <Heading tag="h2" text="Начните покупать" />

      <div className={styles.sectionCarousel}>
        <Card />
      </div>
    </div>
  )
}

export default Carousel;