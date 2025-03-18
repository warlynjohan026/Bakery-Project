import Style from "./Presentation.module.css";

function Presentation() {

  return (
    <div className={Style.hero}>
      <div className={Style.heroTextContainer}>
        <h2>¡Lo hecho en casa sabe mejor!</h2>
        <p>
          En MaryCake, cada pastel es hecho con amor y dedicación. Nuestros
          ingredientes son frescos y de alta calidad.
        </p>
        <button>
          <a href="#offer">Saber mas</a>
        </button>
      </div>
    </div>
  );
}

export default Presentation;
