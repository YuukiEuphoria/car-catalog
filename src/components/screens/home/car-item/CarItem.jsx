import React from "react";
import styles from "./carItem.module.css";


const CarItem = ({ car }) => {
  return (
    <div key={car.id} className={styles.item}>
      <div className={styles.cardContent}>
        <div
          className={`${styles.image} ${styles.imageContainer}`}
          style={{
            backgroundImage: `url(${car.image})`,
          }}
        />
        <div className={styles.info}>
          <h2>{car.name}</h2>
          <p>
            {new Intl.NumberFormat("ru-RU", {
              style: "currency",
              currency: "USD",
            }).format(car.price)}
          </p>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};


export default CarItem;
