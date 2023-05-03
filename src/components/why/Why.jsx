import React from "react";
import styles from "./Why.module.css";

function Why() {
  return (
    <div className={styles.why}>
      <div className={styles.header}>
        <p>Why Us</p>
        <p>
          At luximos we pride ourselves in delivering extensive services to
          fulfill all of your needs with first rate customer care.
        </p>
      </div>
      <div className={styles.why_container}>
        <div className={styles.card}>
          <img src="https://tinyurl.com/3a59wus9" alt="booking online" />
          <p>Easy Online Booking</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>

        <div className={styles.card}>
          <img src="https://tinyurl.com/2p8xncjm" alt="driver" />
          <p>Profesional Drivers</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>

        <div className={styles.card}>
          <img src="https://tinyurl.com/5n78nw6n" alt="cars" />
          <p>Variety Of Cars</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod .
          </p>
        </div>

        <div className={styles.card}>
          <img src="https://tinyurl.com/bdhw4wbr" alt="" />
          <p>Hassle Free Payment</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;
