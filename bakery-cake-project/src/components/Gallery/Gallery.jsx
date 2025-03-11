import styles from "./gallery.module.css";
import galleryData from "./gallery-data";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Gallery() {
  const [data, setData] = useState(galleryData);
  const [activeFilter, setActiveFilter] = useState("");

  const collection = [...new Set(galleryData.map((item) => item.title))];

   const gallery_filter = (itemData) => {
     setData(
       itemData
         ? galleryData.filter((item) => item.title === itemData)
         : galleryData
     );
     setActiveFilter(itemData);
   };

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.filterItems}>
        <ul>
          <li>
            <button
              onClick={() => {
                setData(galleryData);
                setActiveFilter(""); // Reset active filter to "Todo"
              }}
              className={activeFilter === "" ? styles.active : ""}
            >
              Todo
            </button>
          </li>
          {collection.map((item) => (
            <li key={item}>
              <button
                onClick={() => gallery_filter(item)}
                className={activeFilter === item ? styles.active : ""}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.galleryContainer}`}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
        >
          <Masonry>
            {data.map((item, index) => (
              <img
                key={index}
                src={item.srcImg}
                alt={item.altImg}
                style={{ width: "100%", display: "block" }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}

export default Gallery;
