import Header from "../components/Header/Header";
import Presentation from "../components/Presentation-Wall/Presentation";
import Gallery from "../components/Gallery/Gallery";
import PopUpCard from "../components/PopUp/PopUpCard";
import Carrousel from "../components/Carrousel/Carrousel";
import { useState } from "react";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";
import CardSlider from "../components/CardSlider/CardSlider";

function Home() {
  const [selectedItem, setSelectedItem] = useState({
    title:
      "¡Hola, hola! 👋✨ Estás a punto de descubrir algo delicioso, ¿te animas? 😋 ",
    description:
      "🎂 Si quieres conocer más sobre cada una de mis creaciones, solo da clic en cualquiera de las imágenes del carrusel de abajo. Ahí te cuento todos los detalles y lo que hace especial cada bizcocho. ¡Explora y encuentra tu favorito!",
  });

  return (
    <div className="mx-auto grid grid-cols-12">
      <section className="col-span-12">
        <Header />
      </section>

      <section className="col-span-12">
        <Presentation />
      </section>

      <section id="offer" className={`col-span-12 offerSection`}>
        <h2>Conoce nuestra oferta</h2>
        <div className={`cardContainer`}>
          <h3>Lo más popular</h3>
          <CardSlider />
        </div>
      </section>

      <section id="gallery" className={`col-span-12 gallerySection`}>
        <h2>Galería</h2>
        <Gallery />
      </section>

      <section className={`col-span-12 conocerSection`}>
        <h2>Conocer más detalles</h2>
        <PopUpCard
          img={selectedItem.img}
          description={selectedItem.description}
          title={selectedItem.title}
        />
        <Carrousel onSelectItem={setSelectedItem} />
      </section>

      <section id="testimony" className={`col-span-12 testimonialSection`}>
        <h2>Reseñas</h2>
        <div className={`testimonialContainer`}>
          <h3>¡Mira qué dicen mis clientes!</h3>
          <Testimonial />
        </div>
      </section>

      <section className={`col-span-12 footerSection`}>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
