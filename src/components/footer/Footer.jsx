import React from "react";
import styles from "./Footer.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.logo_container}>
          <span>L</span>ux<span>imo</span>
        </div>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/bdkc/" target="_blank">
            <BsLinkedin size={30} className={styles.icon} />
          </a>
          <a href="https://github.com/ButchanCrawford" target="_blank">
            <BsGithub size={30} className={styles.icon} />
          </a>
          <a href="mailto:butchancrawf@gmail.com" target="_blank">
            <IoIosMail size={37} className={styles.icon} />
          </a>
        </div>
        <div className={styles.footer_links}>
          <ul>
            <li>About us</li>
            <li>Vehicles</li>
            <li>Faq</li>
          </ul>
          <ul>
            <li>Get in contact</li>
            <li>Press</li>
            <li>Other services</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
