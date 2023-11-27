import FirstRow from './header/FirstRow';
import SecondRow from './header/SecondRow';
import ThirdRow from './header/ThirdRow';
import styles from "../styles/Header.module.scss";


const Header = () => {


  return (
    <>
      <div className={styles.firstRow}>
        <div className={`${styles.flex} ${styles.container}`}>
          <FirstRow />
        </div>
      </div>

      <div className={`${styles.flex} ${styles.secondRow} ${styles.container}`}>
        <SecondRow />
      </div>

      <div className={`${styles.thirdRowLinkFlex} ${styles.container}`}>
        <ThirdRow />
      </div>
    </>
  );
};

export default Header;
