import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryData from "./gallery-data";
import styles from "./gallery.module.css";

function Gallery() {
  const [data, setData] = useState(galleryData);
  const [activeFilter, setActiveFilter] = useState("");

  const collection = [...new Set(galleryData.map((item) => item.title))];

  const gallery_filter = (itemData) => {
    setData(
      itemData ? galleryData.filter((item) => item.title === itemData)
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
              onClick={() => gallery_filter("")}
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

      <div className={styles.galleryContainer}>
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
                className={`${styles.galleryItem} ${
                  isTransitioning ? styles.hidden : ""
                }`}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}

export default Gallery;
