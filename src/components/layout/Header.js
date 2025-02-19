import globalStyles from "../../app/globals.css";
import Image from "next/image";
import Navbar from "./Navbar";
import LinkButton from "./LinkButton";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`${styles.cabecalho}`}>
      <div className="px-[1.6rem] max-w-[125.6rem] w-full h-auto mx-auto">
        <nav className={`${styles.nav}`}>
          <div className="flex justify-start">
            <a href="#">
              <img
                src="https://media.graphassets.com/2rObY82rREidExKivdTB"
                alt="Logo Union"
                width="263px"
                height="37px"
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
