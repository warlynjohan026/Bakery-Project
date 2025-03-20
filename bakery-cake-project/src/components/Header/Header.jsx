import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Header() {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav className={`${styles.navbar}`}>
      <h2>MaryCake</h2>
      <ul className={`${isOpen ? styles.active : ""}`}>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>
          <a href="#offer">Oferta</a>
        </li>
        <li>
          <a href="#gallery">Galería</a>
        </li>
        <li>
          <a href="#testimony">Testimonios</a>
        </li>
        <Link to={"/contact"}>
          <button>Contácto</button>
        </Link>
      </ul>
      <button
        className={`${styles.buttonBars}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>
    </nav>
  );
}

export default Header;
