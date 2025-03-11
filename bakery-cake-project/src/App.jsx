import "tailwindcss";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation-Wall/Presentation";
import Card from "./components/Card/Card";
import Gallery from "./components/Gallery/Gallery";


function App() {
  return (
    <>
      <div className="mx-auto grid grid-cols-12">
        <div className="col-span-12">
          <Header />
        </div>
        <div className="col-span-12">
          <Presentation />
        </div>
        <section className={`col-span-12 offerSection`}>
          <h2>Conoce nuestra oferta</h2>
          <div className={`col-span-12 cardSectionContainer`}>
            <h3>Lo más popular</h3>
            <div className={`cardSection`}>
              <Card
                imgCard="../src/assets/cake-card-img.jpg"
                title="Bizcocho 1 libra"
                description="Dulce y esponjoso lorem ipsum, con un toque de vainilla y notas de
            felicidad. Cada bocado derretirá tu paladar con capas de suavidad y
            sabor inigualable. 1 libra"
              />
              <Card
                imgCard="../src/assets/presentation-wall-4.jpg"
                title="Bizcocho 1/2 libra"
                description="lorem ipsum, con un toque de vainilla y notas de
            felicidad. Cada bocado derretirá tu paladar con capas de suavidad y
            sabor inigualable. 1/2 libra"
              />
              <Card
                imgCard="../src/assets/presentation-wall-5.jpg"
                title="Bizcocho 2 libra"
                description="2 libras lorem ipsum, con un toque de vainilla y notas de
            felicidad. Cada bocado derretirá tu paladar con capas de suavidad y
            sabor inigualable."
              />
            </div>
          </div>
        </section>
        <section className={`col-span-12 gallerySection`}>
          <h2>Galería</h2>
            <Gallery />
        </section>
      </div>
      
    </>
  );
}

export default App;
