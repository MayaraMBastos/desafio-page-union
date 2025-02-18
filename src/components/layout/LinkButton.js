function LinkButton({ text }) {
  return (
    <div
      className="m-0 p-0 box-border"
      style={{ WebkitFontSmoothing: "antialiased" }}
    >
      <button className="flex items-center mb-initial min-w-[18.6rem] ml-0 justify-center border-0 no-underline cursor-pointer rounded-[5px] w-full bg-none transition-all duration-300 ease-in-out shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
        {text}
      </button>
    </div>
  );
}

export default LinkButton;
