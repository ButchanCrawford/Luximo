import React from "react";
import styles from "./Hero.module.css";
import { useState } from "react";

function Hero() {
  const [billingMethod, setBillingMethod] = useState(true);

  function chooseBillingMethod(event) {
    console.log("ran", event);
    switch (event.target.id) {
      case "distance":
        setBillingMethod(true);
        console.log("D", event.target.id);
        break;

      case "hourly":
        setBillingMethod(false);
        console.log("H", event.target.id);

        break;

      default:
        setBillingMethod(true);
    }
  }

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          <p>Luximo</p>
          <p>
            We offer profesional limosine services in our range of high-end
            vehicles
          </p>
        </div>
        <div className={styles.selection}>
          <div className={styles.selection_container}>
            <div className={styles.selection_menu}>
              <div onClick={chooseBillingMethod}>
                <h5 id="distance">Distance</h5>
              </div>

              <span></span>
              <div onClick={chooseBillingMethod}>
                <h5 id="hourly">Hourly</h5>
              </div>
            </div>
            <div>
              {billingMethod ? (
                <div className={styles.form_distance}>
                  <input type="text" placeholder="Pick up location" />
                  <br />
                  <input type="text" placeholder="Drop off location" />
                  <br />
                  <label htmlFor="">Pick up date</label>
                  <br />
                  <input type="date" />
                  <br />
                  <label htmlFor="">Drop off date</label>
                  <br />
                  <input type="date" />
                  <br />
                  <button>Reserve</button>
                </div>
              ) : (
                <div className={styles.form_hourly}>
                  <br />
                  <label htmlFor="">Pick up date</label>
                  <br />
                  <input type="date" />
                  <br />
                  <input type="text" placeholder="number of hours" />
                  <br />
                  <button>Reserve</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
