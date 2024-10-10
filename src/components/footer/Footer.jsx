import { navItems, contacts } from "../../Constants";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Accordion from "../accordion/Accordion";

export default function Footer() {
  return (
    <footer>
      <div className={styles.spacing}>
        <div className={styles.socialContainer}>
          <Link to="https://www.instagram.com/rpmnyc/">
            <i className="bi bi-instagram" style={{ fontSize: "1.75rem" }} />
          </Link>
          <Link to="https://www.facebook.com/RPMNYCMOTORSPORTS/">
            <i className="bi bi-facebook" style={{ fontSize: "1.75rem" }} />
          </Link>
          <Link to="https://www.youtube.com/@rpmnyc">
            <i className="bi bi-youtube" style={{ fontSize: "1.75rem" }} />
          </Link>
        </div>
        <div className={styles.topContainer}>
          <div style={{ maxWidth: 400 }}>
            <h3>RPM NYC</h3>
            <p>
              We specialize in all Asian makes and models and select American
              and European models
            </p>
          </div>
          <div style={{ maxWidth: 150 }}>
            <h3>QUICK LINKS</h3>
            <ul className={styles.footbar}>
              {navItems.map((items, index) => (
                <li key={index}>
                  <Link className={styles.footlink} to={items.path}>
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ maxWidth: 150 }}>
            <h3>SUPPORT</h3>
            <p>FAQ</p>
            <p>Submit a Request</p>
          </div>
          <div style={{ maxWidth: 260 }}>
            <h3>INFORMATION</h3>
            <p>{contacts.phoneNumber}</p>
            <Link to="https://www.google.com/maps?sca_esv=6449538529ffda2f&output=search&q=rpm+nyc&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J5_cJreBOGYq6XK4Eyx3ZWD2Kpzfwhd4a3MYNhLbt0VbcJ5nFM6tmy8rM4Vusz7kZtpUHasTZEHwIVsRDnbnlUBMzcLaIaDpB8_yksWFSqWa742Hg8RBjLl-bP-yjM2Uvc5RB8kzGhucDiFf6JOJ2sBYbSygzwTAbM_O6uEd0Vkb8rGavA&entry=mc&ved=1t:200715&ictx=111">
              {contacts.address}
            </Link>
          </div>
        </div>
        <hr />
        <p className={styles.copyright}>
          &copy;{new Date().getFullYear()} RPM NYC
        </p>
      </div>
    </footer>
  );
}
