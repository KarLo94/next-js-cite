import FirstRow from './header/FirstRow';
import SecondRow from './header/SecondRow';
import ThirdRow from './header/ThirdRow';
import styles from "../styles/Header.module.scss";


const Header = () => {


  return (
    <>
      <div>
        <div className={`${styles.container} ${styles.firstRow}`}>
          <FirstRow />
        </div>
      </div>

      <div className={`${styles.secondRow} ${styles.container}`}>
        <SecondRow />
      </div>

      <div className={`${styles.thirdRowLinkFlex} ${styles.container}`}>
        <ThirdRow />
      </div>
    </>
  );
};

export default Header;
