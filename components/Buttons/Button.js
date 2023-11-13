import styles from "./Buttons.module.scss";

const Button = ({ text, color }) => {

  // const color = () => {
  //   const red = ;
  //   const grey = ;
  // }

  return (
    <button className={styles.minStyleBtn}>
      <a>{text}</a>
    </button>
  )
}

export default Button;