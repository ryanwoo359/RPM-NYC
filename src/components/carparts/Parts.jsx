import styles from "./Parts.module.css";
import muffler from "../../assets/Muffler.png";
import turbo from "../../assets/Turbo.png";
import brake from "../../assets/Brakes.png";
import coilover from "../../assets/Coilover.png";

export default function carParts(props) {
  const parts = [
    { key: 1, img: muffler, part: "Muffler" },
    { key: 2, img: turbo, part: "Turbo" },
    { key: 3, img: brake, part: "Brakes" },
    { key: 4, img: coilover, part: "Coilover" },
  ];
  // height 75px
  return (
    <div className={styles.wrapper}>
      {parts.map((item) => (
        <div
          className={styles.container}
          key={item.key}
          onClick={props.section}
          ref={props.ref}
        >
          <img className={styles.img} src={item.img} />
          <span className={styles.span} aria-label={item.part}>
            {item.part}
          </span>
        </div>
      ))}
    </div>
  );
}
