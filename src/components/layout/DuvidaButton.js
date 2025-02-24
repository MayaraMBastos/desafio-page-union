import styles from "./DuvidaButton.module.css";
import stylesDuv from "../layout/sections/SectionDuvidas.module.css";

function DuvidaButton({ text, id, onClick, isOpen, textCard }) {
  return (
    <div className={stylesDuv.div_btn_duvidas}>
      <dt>
        <button
          className={styles.btn_duvida}
          id={id}
          type="button"
          onClick={onClick} // Agora o clique alterna o estado
          aria-controls={`duvida-panel-${id}`}
          aria-expanded={isOpen}
        >
          <h3>{text}</h3>
          <img
            src="https://media.graphassets.com/DKDAgqcGR3Cqbmak0FMU"
            alt="Abrir"
          />
        </button>
      </dt>
      <dd
        id={`duvida-panel-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${styles.btn_dd}`}
      >
        <p>{textCard}</p>
      </dd>
    </div>
  );
}

export default DuvidaButton;
