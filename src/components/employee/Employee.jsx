import React from "react";
import styles from "./Employee.module.css";
import teamContact from "../../Constants.js";

export default function Card() {
  return (
    <div className={styles.teamcontainer}>
      {teamContact.map((profile, index) => (
        <div key={index} className={styles.profile}>
          <img
            className={styles.profileImg}
            src={profile.imgURL}
            alt={profile.name}
          />
          <div className={styles.profileContent}>
            <h2>{profile.name}</h2>
            <h3>{profile.position}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
