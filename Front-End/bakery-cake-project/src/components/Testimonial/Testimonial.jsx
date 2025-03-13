import { useState } from "react";
import styles from "./testimonial.module.css";
import testimonialData from "./testimonialData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const [data] = useState(testimonialData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Ajusta el número de tarjetas visibles
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
        {data.map((item) => (
          <div key={item.id} className={styles.slideItem}>
            <div className={styles.testimonialCard}>
              <img
                className={styles.imgAvatar}
                src={item.srcImg}
                alt={item.altImg}
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
