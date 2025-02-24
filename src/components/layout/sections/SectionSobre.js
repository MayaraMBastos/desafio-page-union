import styles from "./SectionSobre.module.css";
import stylesContainer from "../Container.module.css";

function SectionSobre() {
  return (
    <section id="sobre" className={`${stylesContainer.section}`}>
      <header className={`${stylesContainer.section_header}`}>
        <h2>Quem somos?</h2>
      </header>
      <div className={`${stylesContainer.section_text}`}>
        <p>
          O Union é uma oportunidade única para desenvolvedores juniors, nossa
          missão é proporcionar a você um ambiente prático e imersivo,
          semelhante ao que você encontrará no mercado. Aqui, você vai vivenciar
          como é o dia a dia de um desenvolvedor de software, trabalhando lado a
          lado com líderes experientes e outros talentosos desenvolvedores que
          estão no mesmo caminho que você.
        </p>
        <p>
          No Union, você não apenas ganhará experiência, mas também estará
          pronto para enfrentar as demandas do mercado de tecnologia. Nossa
          abordagem holística enfatiza não apenas o conhecimento técnico, mas
          também habilidades interpessoais e práticas ágeis.
        </p>
      </div>
      <div className="sc-bypJrT eKAIvf"></div>
    </section>
  );
}

export default SectionSobre;
