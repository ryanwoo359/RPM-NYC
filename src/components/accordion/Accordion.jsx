import { useState } from "react";
import styles from "./Accordion.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Accordion(props) {
  const [isClick, setClick] = useState(false);

  const toggle = () => {
    setClick(!isClick);
  };

  return (
    <div className={`${styles.accordion} ${isClick ? styles.active : null}`}>
      <div className={styles.box}>
        <div className={styles.title} onClick={toggle}>
          <h3 className={styles.mobilespace}>{props.title}</h3>
          <span
            className={`${styles.chevron} ${
              isClick ? styles.chevanimate : null
            }`}
          >
            <i className="bi bi-chevron-down" />
          </span>
        </div>
        <div className={isClick ? styles.contentshow : styles.content}>
          {props.content}
        </div>
      </div>
    </div>
  );
}
