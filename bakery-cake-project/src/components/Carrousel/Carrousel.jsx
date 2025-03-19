import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './carrousel.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios'



function Carrousel({onSelectItem}) {

  const [dataDB, setDataDB] = useState([])

  useEffect(() => {
    const fetchDataCarrousel = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/gallery");
        setDataDB(response.data);
      } catch (error) {
        console.log(
          `Error al obtener la información de gallery de base de datos, error: ${error}`
        );
      }
    };

    fetchDataCarrousel();
  }, []);

    return (
      <Carousel className={styles.carrouselContainer} dynamicHeight>
        {dataDB.map((item, index) => (
          <div key={index} onClick={() => onSelectItem(item)}>
            <img src={item.img} alt={item.altimg} />
          </div>
        ))}
      </Carousel>
    );
}

export default Carrousel