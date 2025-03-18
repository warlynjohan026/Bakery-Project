import styles from "./gallery.module.css";
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Gallery() {
const [activeFilter, setActiveFilter] = useState("");
const [selectedImgIndex, setSelectedImgIndex] = useState(null);
const [dataGallery, setDataGallery] = useState([]);
const [originalGallery, setOriginalGallery] = useState([]);

useEffect(() => {
  const fetchDataGallery = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/gallery");
      setDataGallery(response.data);
      setOriginalGallery(response.data); // Guardar la copia original
    } catch (error) {
      console.log(
        `Error al obtener la información de gallery de base de datos, error: ${error}`
      );
    }
  };

  fetchDataGallery();
}, []);

const collection = [...new Set(originalGallery.map((item) => item.category))];

const gallery_filter = (itemData) => {
  if (!itemData) {
    // Mostrar todas las imágenes
    setDataGallery(originalGallery);
  } else {
    // Mostrar solo las imágenes filtradas
    const filteredData = originalGallery.filter(
      (item) => item.category === itemData
    );
    setDataGallery(filteredData);
  }
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
    setSelectedImgIndex((prevIndex) => (prevIndex + 1) % dataGallery.length);
  };

  const prevImage = () => {
    setSelectedImgIndex((prevIndex) =>
      prevIndex === 0 ? dataGallery.length - 1 : prevIndex - 1
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

      {/* Galería */}
      <div className={styles.galleryContainer}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
        >
          <Masonry>
            {dataGallery.map((item, index) => (
              <img
                onClick={() => handlePopUp(index)}
                key={index}
                src={item.img}
                alt={item.altimg}
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
              src={dataGallery[selectedImgIndex].img}
              alt={dataGallery[selectedImgIndex].altimg}
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
