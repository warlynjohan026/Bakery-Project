import styles from "./gallery.module.css";
import galleryData from "./gallery-data";
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Gallery() {
  const [data, setData] = useState(galleryData);
  const [activeFilter, setActiveFilter] = useState("");
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);

  const collection = [...new Set(galleryData.map((item) => item.category))];

  const gallery_filter = (itemData) => {
    setData(
      itemData
        ? galleryData.filter((item) => item.category === itemData)
        : galleryData
    );
    setActiveFilter(itemData);
  };

  const handlePopUp = (index) => {
    setSelectedImgIndex(index);
  };

  const closePopUp = () => {
    setSelectedImgIndex(null); // Oculta el popup
  };

  // Navegar entre las imágenes
  const nextImage = () => {
    setSelectedImgIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setSelectedImgIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  // Cerrar con tecla ESC o navegar con flechas
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closePopUp();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImgIndex]);

  return (
    <div className={styles.galleryWrapper}>
      {/* Filtros */}
      <div className={styles.filterItems}>
        <ul>
          <li>
            <button
              onClick={() => {
                setData(galleryData);
                setActiveFilter("");
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

      {/* Galería */}
      <div className={styles.galleryContainer}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
        >
          <Masonry>
            {data.map((item, index) => (
              <img
                onClick={() => handlePopUp(index)}
                key={index}
                src={item.srcImg}
                alt={item.altImg}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* Popup de imagen en pantalla completa */}
      {selectedImgIndex !== null && (
        <div className={styles.popupOverlay} onClick={closePopUp}>
          <div
            className={styles.popupContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={data[selectedImgIndex].srcImg}
              alt={data[selectedImgIndex].altImg}
            />
            <button className={styles.closeBtn} onClick={closePopUp}>
              ×
            </button>

            {/* Botones de navegación */}
            {/* Botones de navegación */}
            <button className={styles.navBtnLeft} onClick={prevImage}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: "#FFD43B" }}
              />
            </button>
            <button className={styles.navBtnRight} onClick={nextImage}>
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#FFD43B" }}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
