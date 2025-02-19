import styles from "./SectionPilares.module.css";
import stylesContainer from "../Container.module.css";

function SectionPilares() {
  return (
    <section className={`${stylesContainer.section}`}>
      <header className="sc-dSCufp iqdMvl">
        <h2>Pilares</h2>
      </header>
      <div className="sc-fxwrCY bRxpkB">
        <p>
          Os pilares que sustentam o formato inovador de aprendizagem do Union é
          a junção de incríveis metodologias!
        </p>
      </div>
      <div className="sc-jnOGJG gqQeKr">
        <div className="sc-gFqAkR bxrNki">
          <div className="opacity-0 translate-y-5 transform">
            <header className="sc-dAbbOL dGtlsv">
              <h3>Ativa</h3>
            </header>
            <div className="sc-feUZmu khRXw">
              <p>
                Metodologia ativa é uma abordagem educacional que coloca o aluno
                como protagonista, onde ele é o responsável por ir atrás dos
                conhecimentos necessários, ficando o professor como um mentor,
                que vai mostrar o caminho para que ele possa ter sucesso no
                aprendizado.
              </p>
            </div>
          </div>
          <div className="opacity-0 translate-y-5 transform">
            <header className="sc-dAbbOL dGtlsv">
              <h3>Andragogia</h3>
            </header>
            <div className="sc-feUZmu khRXw">
              <p>
                É uma metodologia de ensino para adultos, que tem mais liberdade
                e colaboração, permitindo que o aluno decida quando, como e o
                que estudar, tornando o processo de aprendizagem mais sólido e
                eficaz, a andragogia valoriza a autonomia e a experiência dos
                adultos como base para a aprendizagem.
              </p>
            </div>
          </div>
          <div className="opacity-0 translate-y-5 transform">
            <header className="sc-dAbbOL dGtlsv">
              <h3>Ágil</h3>
            </header>
            <div className="sc-feUZmu khRXw">
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
