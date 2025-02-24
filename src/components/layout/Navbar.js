"use client";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className={`${styles.navbar}`}>
      <ul>
        <Link
          to="sobre"
          smooth={true}
          duration={500}
          className={`${styles.navbar_text}`}
        >
          Sobre
        </Link>
        <Link
          to="pilares"
          smooth={true}
          duration={500}
          className={`${styles.navbar_text}`}
        >
          Pilares
        </Link>
        <Link
          to="beneficios"
          smooth={true}
          duration={500}
          className={`${styles.navbar_text}`}
        >
          Beneficios
        </Link>
        <Link
          to="etapas"
          smooth={true}
          duration={500}
          className={`${styles.navbar_text}`}
        >
          Etapas
        </Link>
        <Link
          to="depoimentos"
          smooth={true}
          duration={500}
          className={`${styles.navbar_text}`}
        >
          Depoimentos
        </Link>
        <Link
          to="duvidas"
          smooth={true}
          duration={500}
          className={`${styles.navbar_text}`}
        >
          Duvidas
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
