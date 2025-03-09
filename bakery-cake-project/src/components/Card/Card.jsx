import styles from "./Card.module.css";

function Card({ imgCard, title, description }) {
  return (
    <>
      <div className={styles.card}>
        <img src={imgCard} alt="Carta de oferta de bizcocho" />
        <h4>{title}</h4>
        <p className={styles.pTagCards}>{description}</p>
        <div className={styles.buttonContainer}>
          <button>Cotizar</button>
        </div>
      </div>
    </>
  );
}

export default Card;
