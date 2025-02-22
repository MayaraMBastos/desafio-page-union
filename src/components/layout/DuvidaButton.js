import styles from "./DuvidaButton.module.css";

function DuvidaButton({ text, id }) {
  return (
    <button
      className={`${styles.btn_duvida}`}
      id={id}
      type="button"
      aria-controls="o-que-e-o-union-panel"
      aria-expanded="false"
    >
      <h3>{text}</h3>
      <img
        src="https://media.graphassets.com/DKDAgqcGR3Cqbmak0FMU"
        alt="Abrir"
      />
    </button>
  );
}

export default DuvidaButton;
