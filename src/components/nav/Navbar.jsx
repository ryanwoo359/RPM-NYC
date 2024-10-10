import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { navItems } from "../../Constants";

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  //locks the screen when mobile menu is visible
  const toggleMobileMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
    isMenuVisible
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };

  //prevents screen locking if any nav link is pressed twice
  const closeMenu = () => {
    setIsMenuVisible(false);
    window.scroll(0, 0);
    document.body.style.overflow = "auto";
  };

  return (
    <header>
      <nav className={styles.navbar} role="navigation">
        <ul
          className={
            isMenuVisible
              ? `${styles.navlist} ${styles.mobileMenu}`
              : styles.navlist
          }
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                className={styles.navlinks}
                to={item.path}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* additional information on mobile nav */}
        </ul>

        {/* mobile menu button */}
        <button
          className={styles.mobileMenuIcon}
          onClick={toggleMobileMenu}
          aria-label={isMenuVisible ? "Close menu" : "Open menu"}
          aria-controls="primary-navigation"
          aria-expanded={isMenuVisible}
        >
          {isMenuVisible ? (
            <i className="bi bi-x" />
          ) : (
            <i className="bi bi-list" />
          )}
        </button>
      </nav>
      <Outlet />
    </header>
  );
}
