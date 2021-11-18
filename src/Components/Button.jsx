import styles from "./button.module.css";

const Button = ({ title, onClick }) => (
  <button className={styles.btn} onClick={onClick}>
    {" "}
    {title}{" "}
  </button>
);

export default Button;
