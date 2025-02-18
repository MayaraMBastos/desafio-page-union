import styles from "../../app/globals.css";
import Image from "next/image";
import Navbar from "./Navbar";
import LinkButton from "./LinkButton";

function Header() {
  return (
    <header className="fixed top-0 left-0 bg-[rgb(18,17,25)] transition-all duration-[350ms] ease-in-out w-full h-auto z-[50]">
      <div
        className="max-w-[125.6rem] w-full h-auto mx-auto box-border"
        style={{ WebkitFontSmoothing: "antialiased" }}
      >
        <nav className="flex flex-wrap justify-between items-center w-full h-auto mx-auto h-[6.9rem]">
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
