import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);


  return (
    <nav className={`${styles.navbar}`}>
      <h2>MaryCake  Más</h2>
      <ul className={`${isOpen ? styles.active : ""}`}>
        <Link to="/" onClick={handleLinkClick}>
          <li>Home</li>
        </Link>

        <a href="/#offer" onClick={handleLinkClick}>
          <li>Oferta</li>
        </a>

        <a href="/#gallery" onClick={handleLinkClick}>
          <li>Galería</li>
        </a>

        <a href="/#testimony" onClick={handleLinkClick}>
          <li>Testimonios</li>
        </a>

        <Link to="/contact" onClick={handleLinkClick}>
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
