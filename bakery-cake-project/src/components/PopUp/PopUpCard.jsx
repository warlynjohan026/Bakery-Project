import { useState } from "react";
import styles from "./popupcard.module.css";
import { Link } from "react-router-dom";

function PopUpCard({ title, description, img }) {

  const [isOpen, setisOpen] = useState(false);

  return (
    <div className={styles.popUpCard}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} altimg={title} />
      </div>
      <div className={styles.infoContainer}>
        <h4>{title}</h4>
        <p className={`${styles.pTagCards} ${isOpen ? "" : styles.expandText}`}>
          {description}
        </p>
        <button
          className={styles.buttonLeer}
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          {isOpen ? "Leer menos" : "Leer más"}
        </button>
        <div className={styles.buttonContainer}>
          <button>
            <Link to="/cotizar">Cotizar</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUpCard;
