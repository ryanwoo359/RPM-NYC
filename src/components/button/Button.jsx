import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

export default function Button(props) {
  return (
    <button className={styles.button} onClick={props.click}>
      {props.name}
    </button>
  );
}
