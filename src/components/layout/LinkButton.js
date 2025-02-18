import styles from "./LinkButton.module.css";

function LinkButton({ text }) {
  return (
    <div
      className="m-0 p-0 box-border"
      style={{ WebkitFontSmoothing: "antialiased" }}
    >
      <button
        className={`flex items-center justify-center no-underline cursor-pointer ${styles.button}`}
      >
        {text}
      </button>
    </div>
  );
}

export default LinkButton;
