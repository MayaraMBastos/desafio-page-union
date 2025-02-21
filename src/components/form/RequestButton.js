import styles from "./LinkButton.module.css";

function RequestButton({ onClick }) {
  return (
    <div
      className="m-0 p-0 box-border flex itens-center justify-center"
      style={{ WebkitFontSmoothing: "antialiased" }}
    >
      <button
        action="POST"
        className={`flex items-center justify-center no-underline cursor-pointer ${styles.button}`}
        onClick={onClick}
      >
        <span>Enviar</span>
      </button>
    </div>
  );
}

export default RequestButton;
