import styles from "./Commitments.module.css";
import { benefits } from "../../Constants.js";

export default function Commitments(props) {
  return (
    <>
      <div className={styles.mainContainer}>
        {benefits.map((item, index) => (
          <div key={index} className={styles.container}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
