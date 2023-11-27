import styles from "./Buttons.module.scss";

const Button = ({ text, color }) => {

  // let color = [styles.Buttons]

  // if(color==="red") {
  //   color.push(styles.redBtn)
  // }
  // if(color==="grey") {
  //   color.push(styles.greyBtn)
  // }

console.log({text, color});
  return (
    <button className={`${styles.minStylesBtn} ${color}`}>
      <a className={styles.minStylesBtnText}>{text}</a>
    </button>
  )
}

export default Button;