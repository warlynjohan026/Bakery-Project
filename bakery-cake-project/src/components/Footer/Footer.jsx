import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <section className={styles.businessMark}>
        <h2 className={styles.titles}>MaryCake</h2>
        <h3 className={styles.titleVerseCap}>Colosenses 3:17</h3>
        <p className={styles.pTagVerse}>
          Y todo lo que hacéis, sea de palabra o de hecho, hacedlo todo en el
          nombre del Señor Jesús, dando gracias a Dios el padre por medio de Él.
        </p>
      </section>

      <section className={styles.contacto}>
        <h2 className={styles.titles}>Información</h2>
        <div className={styles.infoContainer}>
          <div className={styles.contactTags}>
            <p className={styles.pTags}>
              <a
                href="mailto:youremail@example.com"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#D44638" }}
                  className={styles.icon}
                />
              </a>
              <strong>Email:</strong>
            </p>
            <p className={styles.pTags}>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#34B7F1" }}
                className={styles.icon}
              />{" "}
              <strong>Número de contacto:</strong>
            </p>
            <p className={styles.pTags}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#FF5733" }}
                className={styles.icon}
              />
              <strong>Dirección:</strong>
            </p>
          </div>

          <div className={styles.contactTagsInfo}>
            <p className={styles.pTags}>m_my_w@hotmail.com</p>
            <p className={styles.pTags}>829-874-8196</p>
            <p className={styles.pTags}>Negocio en casa</p>
          </div>
        </div>
      </section>

      <section className={styles.social}>
        <h2 className={styles.titles}>Sígueme/contáctame</h2>
        <div className={styles.socialNetworkContainer}>
          <a className={styles.fontIcon} href="https://wa.me/8096648196">
            <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#57cf07" }} />
          </a>
          <a
            className={styles.fontIcon}
            href="https://www.instagram.com/maricake_ymas/"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#E1306C" }} />
          </a>
          <a
            className={styles.fontIcon}
            href="https://www.facebook.com/mariluz.pena1"
          >
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#0d89e7" }} />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
