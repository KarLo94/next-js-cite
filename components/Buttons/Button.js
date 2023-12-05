import styles from "./Buttons.module.scss";

const Button = ({ text, color }) => {


console.log({text , color});
  return (
    <button className={`${styles.minStylesBtn}`}>
      <a className={`${styles.minStylesBtnText}`}>{text}</a>
    </button>
  )
}

export default Button;