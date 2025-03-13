import styles from "./header.module.css";

function Header() {
  return (
    <nav className={`${styles.navbar}`}>
      <h2>MaryCake</h2>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Oferta</a>
        </li>
        <li>
          <a href="#">Galleria</a>
        </li>
        <li>
          <a href="#">Testimonio</a>
        </li>
      </ul>
      <button>Contacto</button>
    </nav>
  );
}

export default Header;
