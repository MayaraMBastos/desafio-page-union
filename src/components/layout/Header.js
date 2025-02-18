import globalStyles from "../../app/globals.css";
import Image from "next/image";
import Navbar from "./Navbar";
import LinkButton from "./LinkButton";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`${styles.cabecalho}`}>
      <div className="px-[1.6rem] py-[2.2rem] max-w-[125.6rem] w-full h-auto mx-auto">
        <nav className={`${styles.nav}`}>
          <div className="flex justify-start">
            <a href="#">
              <Image
                src="app/assets/image/logo-union-developers.svg"
                alt="Logo Union"
                width={37}
                height={37}
              />
            </a>
          </div>
          <Navbar />
          <LinkButton text="Junte-se a nós" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
