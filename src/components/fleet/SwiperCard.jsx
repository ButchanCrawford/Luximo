import React from "react";
import styles from "./Fleet.module.css";

function SwiperCard({ image, make }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <p>{make}</p>
    </div>
  );
}

export default SwiperCard;
