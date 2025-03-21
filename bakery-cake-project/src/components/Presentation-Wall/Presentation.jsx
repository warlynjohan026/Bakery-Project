import Style from "./Presentation.module.css";

function Presentation() {

  return (
    <div className={Style.hero}>
      <div className={Style.heroTextContainer}>
        <h2>¡Lo hecho en casa sabe mejor!</h2>
        <p>
          En MaryCake, pongo todo mi amor y dedicación en cada creación. Me
          encanta cuidar cada detalle para crear piezas únicas, deliciosas y
          perfectas para tus momentos especiales.
        </p>
        <button>
          <a href="#offer">Saber más</a>
        </button>
      </div>
    </div>
  );
}

export default Presentation;
