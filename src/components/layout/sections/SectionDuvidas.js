import stylesContainer from "../Container.module.css";
import DuvidaButton from "../DuvidaButton";
import stylesBeneficios from "./SectionBeneficios.module.css";
import styles from "./SectionDuvidas.module.css";

function SectionDuvidas() {
  return (
    <section className={`${stylesContainer.section}`}>
      <div className={`${stylesBeneficios.div_linhas_title}`}>
        <div
          aria-label="Linha a esquerda do titulo"
          className={`left-0 ${stylesBeneficios.div_linha}`}
        ></div>
        <h2 className="sc-fqkvVR ldfcuN">Duvidas</h2>
        <div
          aria-label="Linha a direita do titulo"
          className={`right-0 ${stylesBeneficios.div_linha}`}
        ></div>
      </div>

      <div className={`${styles.div_duvidas}`}>
        <dl>
          <div className={`${styles.div_btn_duvidas}`}>
            <dt>
              <DuvidaButton
                text="O que é o Union?"
                id="accordion-o-que-e-o-union"
              />
            </dt>
            <dd
              id="o-que-e-o-union-panel"
              aria-labelledby="accordion-o-que-e-o-union"
              data-testid="content"
              hidden=""
              className="sc-fXSgeo ckIsdk"
            >
              <p>
                O Union é um ambiente prático e imersivo que busca simular o
                mais próximo do que você vai encontrar nas empresas, desafiando
                seus membros a resolver problemas reais, com cronogramas e
                prazos de entrega.
              </p>
              <p>
                No Union, você desenvolve as skills mais procuradas pelo
                mercado, trabalha com ferramentas e metodologias utilizada pelas
                empresas, além de ganhar experiência trabalhando com outras
                pessoas de diferentes partes do Brasil.
              </p>
              <p>
                Você vivência na prática como é o dia a dia de um desenvolver em
                uma empresa e fica mais preparado para conquistar uma vaga.
              </p>
            </dd>
          </div>
          <div className={`${styles.div_btn_duvidas}`}>
            <dt>
              <button
                id="accordion-quanto-custa-para-fazer-parte-do-union"
                type="button"
                aria-controls="quanto-custa-para-fazer-parte-do-union-panel"
                aria-expanded="false"
                className="sc-esYiGF clEaxt"
              >
                <h3>Quanto custa para fazer parte do Union?</h3>
                <img
                  src="https://media.graphassets.com/DKDAgqcGR3Cqbmak0FMU"
                  alt="Abrir"
                />
              </button>
            </dt>
            <dd
              id="quanto-custa-para-fazer-parte-do-union-panel"
              aria-labelledby="accordion-quanto-custa-para-fazer-parte-do-union"
              data-testid="content"
              hidden=""
              className="sc-fXSgeo ckIsdk"
            >
              <p>Nada! O Union é 100% gratuito.</p>
            </dd>
          </div>
          <div className={`${styles.div_btn_duvidas}`}>
            <dt>
              <button
                id="accordion-quem-pode-participar"
                type="button"
                aria-controls="quem-pode-participar-panel"
                aria-expanded="false"
                className="sc-esYiGF clEaxt"
              >
                <h3>Quem pode participar?</h3>
                <img
                  src="https://media.graphassets.com/DKDAgqcGR3Cqbmak0FMU"
                  alt="Abrir"
                />
              </button>
            </dt>
            <dd
              id="quem-pode-participar-panel"
              aria-labelledby="accordion-quem-pode-participar"
              data-testid="content"
              hidden=""
              className="sc-fXSgeo ckIsdk"
            >
              <p>
                Pessoas que ainda não trabalham na área e que não participem de
                bootcamps ou plataformas de capacitação.
              </p>
            </dd>
          </div>
          <div className={`${styles.div_btn_duvidas}`}>
            <dt>
              <button
                id="accordion-preciso-ter-experiencia-na-area"
                type="button"
                aria-controls="preciso-ter-experiencia-na-area-panel"
                aria-expanded="false"
                className="sc-esYiGF clEaxt"
              >
                <h3>Preciso ter experiência na área?</h3>
                <img
                  src="https://media.graphassets.com/DKDAgqcGR3Cqbmak0FMU"
                  alt="Abrir"
                />
              </button>
            </dt>
            <dd
              id="preciso-ter-experiencia-na-area-panel"
              aria-labelledby="accordion-preciso-ter-experiencia-na-area"
              data-testid="content"
              hidden=""
              className="sc-fXSgeo ckIsdk"
            >
              <p>
                Sim. Você precisa ter no mínimo 1 ano de estudo em programação,
                além disso é necessário que já tenha criado algum projeto
                sozinho, sem que seja projetos guiados, como de cursos e
                eventos.
              </p>
            </dd>
          </div>
          <div className={`${styles.div_btn_duvidas}`}>
            <dt>
              <button
                id="accordion-qual-a-idade-minima-para-fazer-parte-do-union"
                type="button"
                aria-controls="qual-a-idade-minima-para-fazer-parte-do-union-panel"
                aria-expanded="false"
                className="sc-esYiGF clEaxt"
              >
                <h3>Qual a idade mínima para fazer parte do Union?</h3>
                <img
                  src="https://media.graphassets.com/DKDAgqcGR3Cqbmak0FMU"
                  alt="Abrir"
                />
              </button>
            </dt>
            <dd
              id="qual-a-idade-minima-para-fazer-parte-do-union-panel"
              aria-labelledby="accordion-qual-a-idade-minima-para-fazer-parte-do-union"
              data-testid="content"
              hidden=""
              className="sc-fXSgeo ckIsdk"
            >
              <p>Você precisa ter no mínimo 18 anos.</p>
            </dd>
          </div>
          <div className={`${styles.div_btn_duvidas}`}>
            <dt>
              <button
                id="accordion-como-me-inscrevo"
                type="button"
                aria-controls="como-me-inscrevo-panel"
                aria-expanded="false"
                className="sc-esYiGF clEaxt"
              >
                <h3>Como me inscrevo?</h3>
                <img
                  src="https://media.graphassets.com/DKDAgqcGR3Cqbmak0FMU"
                  alt="Abrir"
                />
              </button>
            </dt>
            <dd
              id="como-me-inscrevo-panel"
              aria-labelledby="accordion-como-me-inscrevo"
              data-testid="content"
              hidden=""
              className="sc-fXSgeo ckIsdk"
            >
              <p>
                Se você se encaixa nos requisitos obrigatórios basta preencher o
                nosso formulário e fazer sua pré-inscrição.
              </p>
            </dd>
          </div>
          <div className={`${styles.div_btn_duvidas}`}>
            <dt>
              <button
                id="accordion-existe-algum-processo-seletivo-como-funciona?"
                type="button"
                aria-controls="existe-algum-processo-seletivo-como-funciona?-panel"
                aria-expanded="false"
                className="sc-esYiGF clEaxt"
              >
                <h3>Existe algum processo seletivo? Como funciona?</h3>
                <img
                  src="https://media.graphassets.com/DKDAgqcGR3Cqbmak0FMU"
                  alt="Abrir"
                />
              </button>
            </dt>
            <dd
              id="existe-algum-processo-seletivo-como-funciona?-panel"
              aria-labelledby="accordion-existe-algum-processo-seletivo-como-funciona?"
              data-testid="content"
              hidden=""
              className="sc-fXSgeo ckIsdk"
            >
              <p>
                Nosso processo seletivo consiste em algumas etapas, que são:
                pré-inscrição pelo formulário da página, análise de suas
                informações no formulário, desafio técnico e uma entrevista com
                nosso time.
              </p>
              <p>
                Nosso objetivo é entender seu momento profissional e avaliar se
                você tem o perfil que buscamos para o Union.
              </p>
            </dd>
          </div>
          <div className={`${styles.div_btn_duvidas}`}>
            <dt>
              <button
                id="accordion-o-que-vou-aprender"
                type="button"
                aria-controls="o-que-vou-aprender-panel"
                aria-expanded="false"
                className="sc-esYiGF clEaxt"
              >
                <h3>O que vou aprender?</h3>
                <img
                  src="https://media.graphassets.com/DKDAgqcGR3Cqbmak0FMU"
                  alt="Abrir"
                />
              </button>
            </dt>
            <dd
              id="o-que-vou-aprender-panel"
              aria-labelledby="accordion-o-que-vou-aprender"
              data-testid="content"
              hidden=""
              className="sc-fXSgeo ckIsdk"
            >
              <p>
                Você aprenderá como trabalhar com metodologias e ferramentas
                utilizadas pelas empresas, desenvolver hard e soft skills, tudo
                de forma prática e mão na massa!
              </p>
            </dd>
          </div>
          <div className={`${styles.div_btn_duvidas}`}>
            <dt>
              <button
                id="accordion-quanto-tempo-por-dia-preciso-me-dedicar-aos-projetos"
                type="button"
                aria-controls="quanto-tempo-por-dia-preciso-me-dedicar-aos-projetos-panel"
                aria-expanded="false"
                className="sc-esYiGF clEaxt"
              >
                <h3>Quanto tempo por dia preciso me dedicar aos projetos?</h3>
                <img
                  src="https://media.graphassets.com/DKDAgqcGR3Cqbmak0FMU"
                  alt="Abrir"
                />
              </button>
            </dt>
            <dd
              id="quanto-tempo-por-dia-preciso-me-dedicar-aos-projetos-panel"
              aria-labelledby="accordion-quanto-tempo-por-dia-preciso-me-dedicar-aos-projetos"
              data-testid="content"
              hidden=""
              className="sc-fXSgeo ckIsdk"
            >
              <p>
                Você precisa ter disponibilidade de trabalhar no mínimo 1 hora
                por dia no projeto, é importante também ter disponibilidade para
                participar das reuniões do time, que acontecem diariamente e aos
                finais de semana.
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default SectionDuvidas;
