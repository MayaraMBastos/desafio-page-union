import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <a href="#">
          <li>Sobre</li>
        </a>
        <a href="#">
          <li>Pilares</li>
        </a>
        <a href="#">
          <li>Beneficios</li>
        </a>
        <a href="#">
          <li>Etapas</li>
        </a>
        <a href="#">
          <li>Depoimentos</li>
        </a>
        <a href="#">
          <li>Duvidas</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
