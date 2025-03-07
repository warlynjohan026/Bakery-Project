import styles from "./Card.module.css";
import imgCard from "../../assets/cake-card-img.jpg";

function Card() {
  return (
    <>
        <h2 className={styles.headingsStyleOutContainer}>
          Conoce nuestra oferta
        </h2>
      <section className={styles.oferta}>
        <h2 className={styles.headingsStyleInContainer}>Lo mas popular</h2>
        <div className={styles.card}>
          <img src={imgCard} alt="Carta de oferta de bizcocho" />
          <h4>Bizchoc 1 libra</h4>
          <p>
            Dulce y esponjoso lorem ipsum, con un toque de vainilla y notas de
            felicidad. Cada bocado derretirá tu paladar con capas de suavidad y
            sabor inigualable. 1 libra
          </p>
          <div className={styles.buttonContainer}>
            <button>Cotizar</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
