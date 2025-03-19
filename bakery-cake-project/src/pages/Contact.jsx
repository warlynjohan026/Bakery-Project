import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import styles from "./contact.module.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });

  const [message, setMessage] = useState("");

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

    try {
      // Hacemos la solicitud POST con Axios
      const response = await axios.post(
        "http://localhost:4000/api/contact/send-contact-message",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setMessage("¡Mensaje de contacto enviado con éxito!");
        setFormData({ name: "", number: "", message: "" });
        setTimeout(() => {
          setMessage("");
        }, 5000);
      } else {
        setMessage("Hubo un problema al enviar el mensaje.");
        setTimeout(() => {
          setMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Hubo un error al enviar el formulario.");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <>
      <Header />
      <section className={`col-span-12 ${styles.contactContainer} `}>
        <div className={styles.contactWrapper}>
          <h1 className={styles.titleContact}>¡Vamos a contactarnos!</h1>
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
              <label>Número de Whatsapp/Contácto</label>
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
              <label>Comentarios</label>
              <textarea
                placeholder="¡Déjame un mensaje!"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.fieldmessage}
              ></textarea>
            </div>
            <div className={styles.buttonWrapper}>
              <Link to={"/"}><button className={styles.button}>Volver</button></Link>
              <button id="submitButton" className={styles.button}>
                Enviar
              </button>
            </div>
          </form>
          {message && <p className={styles.titlemessage}>{message}</p>}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
