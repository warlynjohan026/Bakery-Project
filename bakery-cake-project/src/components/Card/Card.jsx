import { useEffect, useState } from "react";
import styles from "./Card.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Card() {
  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    const fetchDataCards = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/card");
        setDataCard(response.data);
      } catch (error) {
        console.log(
          `Error al obtener la información de las cartas de base de datos, error: ${error}`
        );
      }
    };

    fetchDataCards();
  }, []);

  return (
    <>
      {dataCard.length === 0 ? (
        <p>Cargando tarjetas...</p>
      ) : (
        dataCard.map((item) => (
          <div className={styles.card} key={item._id}>
            <img className={styles.cardImg} src={item.img} alt={item.altimg} />
            <h4>{item.title}</h4>
            <p className={styles.pTagCards}>{item.description}</p>
            <div className={styles.buttonContainer}>
              <button className={styles.cardButton}>
                <Link
                  to="/cotizar"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Cotizar
                </Link>
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Card;
