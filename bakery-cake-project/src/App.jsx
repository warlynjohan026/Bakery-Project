import "tailwindcss";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation-Wall/Presentation";
import Card from "./components/Card/Card";
import Gallery from "./components/Gallery/Gallery";
import PopUpCard from "./components/PopUp/PopUpCard";
import Carrousel from "./components/Carrousel/Carrousel";
import { useState } from "react";
import galleryData from "./components/Gallery/gallery-data";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {

  const [selectedItem, setSelectedItem] = useState({
    title: "Mmmm, veamos que tenemos",
    description: "Casi casi llego...",
  });


  return (
    <>
      <div className="mx-auto grid grid-cols-12">
        <section className="col-span-12">
          <Header />
        </section>
        <section className="col-span-12">
          <Presentation />
        </section>
        <section className={`col-span-12 offerSection`}>
          <h2>Conoce nuestra oferta</h2>
          <div className={`col-span-12 cardSectionContainer`}>
            <h3>Lo más popular</h3>
            <div className={`cardSection`}>
              <Card />
            </div>
          </div>
        </section>
        <section className={`col-span-12 gallerySection`}>
          <h2>Galería</h2>
          <Gallery />
        </section>
        <section className={`col-span-12 conocerSection`}>
          <h2>Conocer mas detalles</h2>
          <PopUpCard
            img={selectedItem.srcImg}
            description={selectedItem.description}
            title={selectedItem.title}
          />
          <Carrousel onSelectItem={setSelectedItem} />
        </section>
        <section className={`col-span-12 testimonialSection`}>
          <h2>Testimonios</h2>
          <div className={`testimonialContainer`}>
            <h2>¡Mira que dicen mis clientes!</h2>
            <Testimonial />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
