import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import styles from "./cotizar.module.css";

function Cotizar() {
  return (
    <>
      <Header />
      <section className={`col-span-12 ${styles.contactContainer} `}>
        <div className={styles.contactWrapper}>
          <h1 className={styles.titleContact}>¡Vamos a contactarnos para una!</h1>
          <h3 className={styles.titlemessage}>
            🥰Un bizcochito o unas galletas al año no hace daño🥰
          </h3>
          <form action="">
            <div className={styles.inputbox}>
              <label>Nombre</label>
              <input
                type="text"
                className={styles.field}
                placeholder="Hola, ¡compárteme tu nombre!"
                required
              />
            </div>

            <div className={styles.inputbox}>
              <label>Número de Whatsapp/Contacto</label>
              <input
                type="text"
                className={styles.field}
                placeholder="Número de contacto"
                required
              />
            </div>

            <div className={styles.inputbox}>
              <label>
                Oferta:
                <select className={styles.field} name="oferta" required>
                  <option value="">Selecciona una oferta</option>
                  <option value="bizcocho">Bizcochos</option>
                  <option value="galleta">Galletas</option>
                  <option value="cupcake">CupCake</option>
                </select>
              </label>
            </div>

            <div className={styles.inputbox}>
              <label>Comentarios</label>
              <textarea
                name=""
                id=""
                placeholder="¡Déjame un mensaje!"
                className={styles.fieldmessage}
              ></textarea>
            </div>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>Volver</button>
              <button className={styles.button}>Enviar</button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cotizar;
