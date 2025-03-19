import { useState, useEffect } from "react";
import styles from "./testimonial.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'

function Testimonial() {

  const [dataDBTestimony, setDataDBTestimony] = useState([])

   useEffect(() => {
     const fetchDataTestimony = async () => {
       try {
         const response = await axios.get("http://localhost:4000/api/testimonies");
         setDataDBTestimony(response.data);
       } catch (error) {
         console.log(
           `Error al obtener la información de las cartas de base de datos, error: ${error}`
         );
       }
     };

     fetchDataTestimony();
   }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Ajusta el número de tarjetas visibles
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
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
        {dataDBTestimony.map((item, index) => (
          <div key={index} className={styles.slideItem}>
            <div className={styles.testimonialCard}>
              <img
                className={styles.imgAvatar}
                src={item.img}
                alt={item.altimg}
              />
              <div className={styles.testimonialBody}>
                <h4>{item.customer}</h4>
                <p>{item.comment}</p>
                <p>
                  <strong>Pedido:</strong> {item.purchased}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Testimonial;
