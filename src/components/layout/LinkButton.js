import styles from "./LinkButton.module.css";

function LinkButton({ text, href, onClick }) {
  return (
    <button
      href={href}
      type="button"
      className={`flex items-center justify-center no-underline cursor-pointer ${styles.button}`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
}

export default LinkButton;
