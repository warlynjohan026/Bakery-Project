import { useState } from "react";
import styles from "./Card.module.css";
import cardData from "./cardData";

function Card() {

const [dataCard, setDataCard] = useState(cardData)

  
   console.log("cardData length:", dataCard.length);
  return (
    <>
      {dataCard.map((item, index) => (
        <div className={styles.card} key={item.id}>
          <img
            className={styles.cardImg}
            src={item.srcImg}
            alt="Carta de oferta de bizcocho"
          />
          <h4>{item.title}</h4>
          <p className={styles.pTagCards}>{item.description}</p>
          <div className={styles.buttonContainer}>
            <button className={styles.cardButton}>Cotizar</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
