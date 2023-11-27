import FirstRow from "./footer/FirstRow";
import SecondRow from "./footer/SecondRow";
import ThirdRow from "./footer/ThirdRow";
import Copyright from "./footer/Copyright";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  

  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.container}>
        <FirstRow /> 
        </div>    
      </div>

      <div className={styles.subscribe}>
        <div className={styles.container}>
          <SecondRow />
        </div>
      </div>

      <div className={styles.footer__nav}>
        <div className={`${styles.container} ${styles.footer__nav__flex}`}>
          <ThirdRow />
        </div>
      </div>

      <div className={styles.footer__copyright}>
        <div className={styles.container}>
        <Copyright />
      </div>
      </div>



    </div>
  );
};

export default Footer;
