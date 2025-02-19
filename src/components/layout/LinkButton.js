import styles from "./LinkButton.module.css";

function LinkButton({ text, href }) {
  return (
    <div
      className="m-0 p-0 box-border"
      style={{ WebkitFontSmoothing: "antialiased" }}
    >
      <button
        href={href}
        className={`flex items-center justify-center no-underline cursor-pointer ${styles.button}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}

export default LinkButton;
