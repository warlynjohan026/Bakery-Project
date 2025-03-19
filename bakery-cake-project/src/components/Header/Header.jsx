import styles from "./header.module.css";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav className={`${styles.navbar}`}>
      <h2>MaryCake</h2>
      <ul>
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
      </ul>
      <Link to={"/contact"}>
        <button>Contácto</button>
      </Link>
    </nav>
  );
}

export default Header;
