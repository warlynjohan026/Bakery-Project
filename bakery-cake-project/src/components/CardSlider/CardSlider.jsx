import { useState, useEffect } from "react";
import styles from "./cardslider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function CardSlider() {
  const [dataCard, setDataCard] = useState([]);
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    const fetchDataCards = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/card`);
        setDataCard(response.data);
      } catch (error) {
        console.error(`Error al obtener las tarjetas: ${error}`);
      }
    };

    fetchDataCards();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {dataCard.map((item, index) => (
          <div key={index} className={styles.slideItem}>
            <div className={styles.card}>
              <img
                className={styles.cardImg}
                src={item.img}
                alt={item.altimg}
              />
              <h4>{item.title}</h4>
              <p className={`${styles.pTagCards} ${isOpen ? "" : styles.expandText}`}>{item.description}</p>
               <button
                        className={styles.buttonLeer}
                        onClick={() => {
                          setisOpen(!isOpen);
                        }}
                      >
                        {isOpen ? "Leer menos" : "Leer más"}
                      </button>
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
          </div>
        ))}
      </Slider>
    </>
  );
}

export default CardSlider;
