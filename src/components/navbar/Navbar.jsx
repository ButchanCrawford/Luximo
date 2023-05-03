import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      {" "}
      <header className={styles.navbar}>
        <div className={styles.logo_container}>
          <span>L</span>ux<span>imo</span>
        </div>
        <nav>
          <ul
            className={
              showMobileMenu
                ? [styles.menu, styles.active].join(" ")
                : [styles.menu]
            }
          >
            <li>
              {" "}
              <a href="">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">Vehicles</a>
            </li>
            <li>
              {" "}
              <a href="">Contact</a>
            </li>
            <li>
              <button>Sign in</button>
            </li>
          </ul>
        </nav>
        <button className={styles.navbtn}>Sign in</button>
        <div
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className={styles.mobile_btn}
        >
          {showMobileMenu ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
