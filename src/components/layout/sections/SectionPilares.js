import styles from "./SectionPilares.module.css";
import stylesContainer from "../Container.module.css";

function SectionPilares() {
  return (
    <section className={`${stylesContainer.section}`}>
      <header className={`${stylesContainer.section_header}`}>
        <h2>Pilares</h2>
      </header>
      <div className={`${stylesContainer.section_text}`}>
        <p>
          Os pilares que sustentam o formato inovador de aprendizagem do Union é
          a junção de incríveis metodologias!
        </p>
      </div>
      <div className="mt-[2rem] mb-[2rem]">
        <div className={`${styles.div_pilares}`}>
          <div className={`${styles.div_metodologias}`}>
            <header className={`${styles.div_head}`}>
              <h3>Ativa</h3>
            </header>
            <div className={`${styles.div_metodologias_text}`}>
              <p>
                Metodologia ativa é uma abordagem educacional que coloca o aluno
                como protagonista, onde ele é o responsável por ir atrás dos
                conhecimentos necessários, ficando o professor como um mentor,
                que vai mostrar o caminho para que ele possa ter sucesso no
                aprendizado.
              </p>
            </div>
          </div>
          <div className={`${styles.div_metodologias}`}>
            <header className={`${styles.div_head}`}>
              <h3>Andragogia</h3>
            </header>
            <div className={`${styles.div_metodologias_text}`}>
              <p>
                É uma metodologia de ensino para adultos, que tem mais liberdade
                e colaboração, permitindo que o aluno decida quando, como e o
                que estudar, tornando o processo de aprendizagem mais sólido e
                eficaz, a andragogia valoriza a autonomia e a experiência dos
                adultos como base para a aprendizagem.
              </p>
            </div>
          </div>
          <div className={`${styles.div_metodologias}`}>
            <header className={`${styles.div_head}`}>
              <h3>Ágil</h3>
            </header>
            <div className={`${styles.div_metodologias_text}`}>
              <p>
                A metodologia ágil é uma metodologia que estimula a colaboração
                entre o time, permitindo que tenha uma visão mais transparente,
                liberdade para fazer escolhas e tomar decisões, buscando a
                melhora continua entre os membros, os processos e a qualidade
                geral do trabalho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPilares;
