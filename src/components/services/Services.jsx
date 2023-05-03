import React from "react";
import styles from "./Services.module.css";

function Services() {
  return (
    <>
      <div className={styles.services}>
        <div className={styles.header}>
          <p>Services</p>
          <p>
            We invite you to try our services, we personally guarantee you will
            be completely satisfied.
          </p>
        </div>
        <div className={styles.service_container}>
          <div className={styles.card}>
            <img src="https://tinyurl.com/3arytzsb" alt="service" />
            <div>
              <p>Airport transfers</p>
              <p>
                With additional wait time and and flight trackin in case of
                delays, our service is optimiezed to make every airport trip a
                breeze.
              </p>
              <button>Learn More</button>
            </div>
          </div>

          <div className={styles.card}>
            <img src="https://tinyurl.com/2e8xuv7v" alt="service" />
            <div>
              <p>Intercity trips</p>
              <p>
                Your stress free solution for travelling between cities with
                chaffeurs all over the world.
              </p>
              <button>Learn More</button>
            </div>
          </div>

          <div className={styles.card}>
            <img src="https://tinyurl.com/5axty4at" alt="service" />
            <div>
              <p>Wedding events</p>
              <p>
                Our friendly, and attentive servoce combined with thorough
                attention to detail ensure you cam truly relac and enjoy your
                special day.
              </p>
              <button>Learn More</button>
            </div>
          </div>

          <div className={styles.card}>
            <img src="https://tinyurl.com/5ahsvevv" alt="service" />
            <div>
              <p>Business Meeting</p>
              <p>
                Focus on what matters. Sound proof cabins provides the
                opportunity for you and your team to stay sharp befor your big
                meeting.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
