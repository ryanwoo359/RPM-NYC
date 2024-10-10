import styles from "./Content.module.css";
import Button from "../components/button/Button";

export default function Content(props) {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={props.image} />
        <div className={styles.info}>
          <h2 className={styles.heading}>{props.heading}</h2>
          <p>{props.paragraph}</p>
          <Button name={props.btnName} click={props.btnClick} />
        </div>
      </div>
    </>
  );
}
