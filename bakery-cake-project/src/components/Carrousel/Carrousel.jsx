import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './carrousel.module.css'
import galleryData from '../Gallery/gallery-data';
import { useState } from 'react';



function Carrousel({onSelectItem}) {

    const [data] = useState(galleryData);

    return (
      <Carousel className={styles.carrouselContainer} dynamicHeight>
        {data.map((item, index) => (
          <div key={index} onClick={() => onSelectItem(item)}>
            <img src={item.srcImg} alt={item.altImg} />
          </div>
        ))}
      </Carousel>
    );
}

export default Carrousel