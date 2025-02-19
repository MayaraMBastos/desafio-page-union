import styles from "./SectionEtapas.module.css";
import stylesContainer from "../Container.module.css";
import stylesBeneficios from "./SectionBeneficios.module.css";

function SectionEtapas() {
  return (
    <section className={`${stylesContainer.section}`}>
      <div className={`${stylesBeneficios.div_linhas_title}`}>
        <div
          aria-label="Linha a esquerda do titulo"
          className={`left-0 ${stylesBeneficios.div_linha}`}
        ></div>
        <h2 className="sc-fqkvVR ldfcuN">Etapas</h2>
        <div
          aria-label="Linha a direita do titulo"
          className={`right-0 ${stylesBeneficios.div_linha}`}
        ></div>
      </div>
      <p>Conheça as etapas do nosso processo seletivo</p>
      <div className="mt-[8rem] mx-auto max-w-[106.7rem] px-[1.6rem] ">
        <div className={`${styles.div_ol}`}>
          <ol>
            <li>
              <div className={`${styles.div_li}`}>
                <span>1</span>
                <div className={`${styles.div_text_card}`}>
                  <h3 className="sc-bmzYkS jghSuU">Pré-inscrição</h3>
                  <p className="sc-iHGNWf esbTeF">
                    Inicie a sua inscrição preenchendo o nosso formulário
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={`${styles.div_li}`}>
                <span>2</span>
                <div className={`${styles.div_text_card}`}>
                  <h3 className="sc-bmzYkS jghSuU">Análise do formulário</h3>
                  <p className="sc-iHGNWf esbTeF">
                    O nosso time irá analisar suas informações
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={`${styles.div_li}`}>
                <span>3</span>
                <div className={`${styles.div_text_card}`}>
                  <h3 className="sc-bmzYkS jghSuU">Desafio técnico</h3>
                  <p className="sc-iHGNWf esbTeF">
                    Após a análise você receberá um desafio prático
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={`${styles.div_li}`}>
                <span>4</span>
                <div className={`${styles.div_text_card}`}>
                  <h3 className="sc-bmzYkS jghSuU">Entrevista</h3>
                  <p className="sc-iHGNWf esbTeF">
                    Nessa fase iremos bater um papo para que possamos conhecer
                    melhor você
                  </p>
                </div>
              </div>
            </li>
          </ol>
          <div className="sc-dtBdUo crWKKo"></div>
        </div>
      </div>
    </section>
  );
}

export default SectionEtapas;
