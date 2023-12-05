import styles from "./Buttons.module.scss";
import cn from "classnames";

const Button = ({ text, color }) => {

  


  return (
    <button className={cn(styles.minStylesBtn, {
      [styles.redBtn]: color === 'red',
      [styles.greyBtn]: color === 'grey',
    })}>
      <a className={`${styles.minStylesBtnText}`}>{text}</a>
    </button>
  )
}

export default Button;