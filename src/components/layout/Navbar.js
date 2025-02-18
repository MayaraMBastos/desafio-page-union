import styles from "../../app/globals.css";

function Navbar() {
  return (
    <div className="flex justify-center items-center h-0 p-0">
      <ul className="flex flex-row justify-center items-center gap-[1.6rem] p-0">
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
