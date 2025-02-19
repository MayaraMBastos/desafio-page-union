import LinkButton from "../LinkButton";
import styles from "./SectionTop.module.css";

function SectionTop() {
  return (
    <section>
      <div className={`${styles.bg_section_top}`}>
        <div className={`${styles.content_section}`}>
          <div className={`${styles.content_text}`}>
            <div className="opacity-100 transform-none">
              <h1>
                Ganhe <strong>experiência </strong>como desenvolvedor júnior
              </h1>
            </div>
            <p className="opacity-100 transform-none">
              Descubra como o Union oferece um ambiente prático e imersivo para
              desenvolvedores juniors ganharem experiência de mercado, mesmo sem
              estar em uma empresa. Participe dessa experiência única e
              impulsione sua carreira como desenvolvedor!
            </p>

            <LinkButton
              text={"Quero participar"}
              href="#formulario"
              className="opacity-100 transform-none"
            />
          </div>
          <img
            className="translate-y-[0.289163px] translate-z-0"
            src="https://media.graphassets.com/zRjyxnD5RyGdG8xVpll8"
            alt="Um octógono com três pontos, representando a união dos desenvolvedores"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default SectionTop;
