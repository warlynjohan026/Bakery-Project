import { useState } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import styles from "./cotizar.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Cotizar() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    oferta: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;

    // Validación simple del número de teléfono (puedes personalizarla más)
    if (!/^\d{10}$/.test(formData.number)) {
      setResponseMessage("Por favor, ingresa un número válido de 10 dígitos.");
      submitButton.disabled = false;
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/contact/send-cotizacion-message", // Cambia la URL según corresponda
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setResponseMessage("¡Cotización enviada con éxito!");
        setFormData({ name: "", number: "", oferta: "", message: "" });
        setTimeout(() => setResponseMessage(""), 15000);
      } else {
        setResponseMessage("Hubo un problema al enviar la cotización.");
        setTimeout(() => setResponseMessage(""), 15000);
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Hubo un error al enviar la cotización.");
      setTimeout(() => setResponseMessage(""), 15000);
    } finally {
      submitButton.disabled = false;
    }
  };

  return (
    <>
      <Header />
      <section className={`col-span-12 ${styles.contactContainer}`}>
        <div className={styles.contactWrapper}>
          <h1 className={styles.titleContact}>
            ¡Vamos a contactarnos para una cotización!
          </h1>
          <h3 className={styles.titlemessage}>
            🥰Un bizcochito o unas galletas al año no hace daño🥰
          </h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputbox}>
              <label>Nombre</label>
              <input
                type="text"
                className={styles.field}
                placeholder="Hola, ¡compárteme tu nombre!"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputbox}>
              <label>Número de Whatsapp/Contacto</label>
              <input
                type="text"
                className={styles.field}
                placeholder="Número de contacto"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                maxLength="10"
                minLength="10"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "");
                }}
              />
            </div>

            <div className={styles.inputbox}>
              <label>
                Oferta:
                <select
                  className={styles.field}
                  name="oferta"
                  value={formData.oferta}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una oferta</option>
                  <option value="bizcocho">Bizcochos</option>
                  <option value="galleta">Galletas</option>
                  <option value="cupcake">CupCakes</option>
                  <option value="brownie">Brownies</option>
                  <option value="combo">Combo</option>
                </select>
              </label>
            </div>

            <div className={styles.inputbox}>
              <label>Comentarios</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="¡Déjame un mensaje!"
                className={styles.fieldmessage}
              ></textarea>
            </div>

            <div className={styles.buttonWrapper}>
              <Link to={"/"}>
                <button type="button" className={styles.button}>
                  Volver
                </button>
              </Link>
              <button id="submitButton" type="submit" className={styles.button}>
                Enviar
              </button>
            </div>
          </form>

          {responseMessage && (
            <p className={styles.titlemessage}>{responseMessage}</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cotizar;
