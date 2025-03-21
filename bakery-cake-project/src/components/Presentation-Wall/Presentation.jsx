import Style from "./presentation.module.css";

function Presentation() {

  return (
    <div className={Style.hero}>
      <div className={Style.heroTextContainer}>
        <h2>¡Lo hecho en casa sabe mejor!</h2>
        <p>
         
        </p>
        <button>
          <a href="#offer">Saber más</a>
        </button>
      </div>
    </div>
  );
}

export default Presentation;
