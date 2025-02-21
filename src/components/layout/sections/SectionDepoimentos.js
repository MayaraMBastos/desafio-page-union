import SlideButton from "@/components/layout/SlideButton";
import styles from "./SectionDepoimentos.module.css";
import stylesBeneficios from "./SectionBeneficios.module.css";

function SectionDepoimentos() {
  return (
    <section id="depoimentos" className={`${styles.div_section_scroll}`}>
      <div className={`${stylesBeneficios.div_linhas_title}`}>
        <div
          aria-label="Linha a esquerda do titulo"
          className={`left-0 ${stylesBeneficios.div_linha}`}
        ></div>
        <h2 className="sc-fqkvVR ldfcuN">Depoimentos</h2>
        <div
          aria-label="Linha a direita do titulo"
          className={`right-0 ${stylesBeneficios.div_linha}`}
        ></div>
      </div>
      <p className="sc-ihgnxF fTafTH">
        Veja o que quem já passou por essa experiência fala
      </p>
      <div className="sc-jMakVo jMUzyK">
        <div className="sc-iMWBiJ chJdth">
          <div className="swiper swiper-initialized swiper-horizontal">
            <div className="flex overflow-x-auto space-x-4">
              <div
                className={`swiper-slide swiper-slide-active ${styles.div_card_dep}`}
                data-swiper-slide-index="0"
              >
                <div className="sc-cWSHoV bCnNdA">
                  <div className="sc-eBMEME erUHxI">
                    <div className="sc-dCFHLb fkzhXi">
                      <img
                        src="https://avatars.githubusercontent.com/u/75648386?v=4"
                        alt="Foto do membro Luiz Meraki"
                      />
                    </div>
                  </div>
                  <h2 className="sc-fhzFiK rKiBd">Luiz Meraki</h2>
                  <p className="sc-jxOSlx kjCipg">
                    No Union você consegue ter muita evolução em pouco tempo,
                    desenvolvendo tanto sua parte técnica como as habilidades
                    interpessoais. No momento que você entra no Union, você
                    mergulha a fundo nas tecnologias e vai aprendendo e
                    aprimorando durante o dia a dia.
                  </p>
                  <div className="sc-lcIPJg mqsxV">
                    <a
                      href="https://www.linkedin.com/in/luizmeraki/"
                      target="_blank"
                    >
                      <img
                        src="https://media.graphassets.com/y4KMQdygSH6uZx46pxjU"
                        alt="Linkedin"
                      />
                      Linkedin
                    </a>
                    <a href="https://github.com/LuizMeraki" target="_blank">
                      <img
                        src="https://media.graphassets.com/4lDgbi8FQpq8QYSiranx"
                        alt="Github"
                      />
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`swiper-slide swiper-slide-active ${styles.div_card_dep}`}
                data-swiper-slide-index="1"
              >
                <div className="sc-cWSHoV bCnNdA">
                  <div className="sc-eBMEME erUHxI">
                    <div className="sc-dCFHLb fkzhXi">
                      <img
                        src="https://avatars.githubusercontent.com/u/78116908?v=4"
                        alt="Foto do membro Matheus Oliveira"
                      />
                    </div>
                  </div>
                  <h2 className="sc-fhzFiK rKiBd">Matheus Oliveira</h2>
                  <p className="sc-jxOSlx kjCipg">
                    Antes de participar do Union, eu não tinha a mínima ideia de
                    como era trabalhar em equipe e foi muito importante ter essa
                    experiência. Durante a participação, consegui desenvolver
                    soft skills importantes para o mercado de trabalho, como
                    organização, atenção e trabalho em equipe.{" "}
                  </p>
                  <div className="sc-lcIPJg mqsxV">
                    <a
                      href="https://www.linkedin.com/in/matheushenrioliveira/"
                      target="_blank"
                    >
                      <img
                        src="https://media.graphassets.com/y4KMQdygSH6uZx46pxjU"
                        alt="Linkedin"
                      />
                      Linkedin
                    </a>
                    <a href="https://github.com/matheusOliv23" target="_blank">
                      <img
                        src="https://media.graphassets.com/4lDgbi8FQpq8QYSiranx"
                        alt="Github"
                      />
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`swiper-slide swiper-slide-active ${styles.div_card_dep}`}
                data-swiper-slide-index="2"
              >
                <div className="sc-cWSHoV bCnNdA">
                  <div className="sc-eBMEME erUHxI">
                    <div className="sc-dCFHLb fkzhXi">
                      <img
                        src="https://avatars.githubusercontent.com/u/83667469?v=4"
                        alt="Foto do membro José Ronaldo"
                      />
                    </div>
                  </div>
                  <h2 className="sc-fhzFiK rKiBd">José Ronaldo</h2>
                  <p className="sc-jxOSlx kjCipg">
                    O principal benefício do Union é ter uma pessoa mais
                    experiente junto, que vai te direcionando. No Union, você
                    encontra um ambiente muito profissional, onde é cobrado que
                    você tenha padrão de commit, testes e uma alta qualidade de
                    escrita de código, aumentando muita sua qualidade técnica.
                  </p>
                  <div className="sc-lcIPJg mqsxV">
                    <a
                      href="https://www.linkedin.com/in/devjoseronaldo"
                      target="_blank"
                    >
                      <img
                        src="https://media.graphassets.com/y4KMQdygSH6uZx46pxjU"
                        alt="Linkedin"
                      />
                      Linkedin
                    </a>
                    <a
                      href="https://github.com/Dev-JoseRonaldo"
                      target="_blank"
                    >
                      <img
                        src="https://media.graphassets.com/4lDgbi8FQpq8QYSiranx"
                        alt="Github"
                      />
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`swiper-slide swiper-slide-active ${styles.div_card_dep}`}
                data-swiper-slide-index="3"
              >
                <div className="sc-cWSHoV bCnNdA">
                  <div className="sc-eBMEME erUHxI">
                    <div className="sc-dCFHLb fkzhXi">
                      <img
                        src="https://avatars.githubusercontent.com/u/105453766?v=4"
                        alt="Foto do membro Petrus Borges"
                      />
                    </div>
                  </div>
                  <h2 className="sc-fhzFiK rKiBd">Petrus Borges</h2>
                  <p className="sc-jxOSlx kjCipg">
                    No Union eu consegui desenvolver minhas hard skills,
                    aprendendo novas tecnologias e melhorando a escrita do meu
                    código. Eu percebi o quanto a parte de soft skills é
                    importante para o mercado de tecnologia, como ter
                    inteligência emocional, comunicação efetiva e resolução de
                    problemas.
                  </p>
                  <div className="sc-lcIPJg mqsxV">
                    <a
                      href="https://www.linkedin.com/in/petrusborgesmachado/"
                      target="_blank"
                    >
                      <img
                        src="https://media.graphassets.com/y4KMQdygSH6uZx46pxjU"
                        alt="Linkedin"
                      />
                      Linkedin
                    </a>
                    <a href="https://github.com/PetrusBorges" target="_blank">
                      <img
                        src="https://media.graphassets.com/4lDgbi8FQpq8QYSiranx"
                        alt="Github"
                      />
                      Github
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`swiper-slide swiper-slide-active ${styles.div_card_dep}`}
                data-swiper-slide-index="4"
              >
                <div className="sc-cWSHoV bCnNdA">
                  <div className="sc-eBMEME erUHxI">
                    <div className="sc-dCFHLb fkzhXi">
                      <img
                        src="https://avatars.githubusercontent.com/u/90845572?v=4"
                        alt="Foto do membro Salomão Leal"
                      />
                    </div>
                  </div>
                  <h2 className="sc-fhzFiK rKiBd">Salomão Leal</h2>
                  <p className="sc-jxOSlx kjCipg">
                    Eu estava preso em cursos e não sabia como que era o fluxo
                    de trabalho de uma empresa, com o Union eu consegui aprender
                    isso e hoje me sinto muito mais preparado para o mercado.
                    Durante a experiência no Union, eu aprendi a como pesquisar
                    e se virar para resolver minhas task.
                  </p>
                  <div className="sc-lcIPJg mqsxV">
                    <a
                      href="https://www.linkedin.com/in/salomaosilval/"
                      target="_blank"
                    >
                      <img
                        src="https://media.graphassets.com/y4KMQdygSH6uZx46pxjU"
                        alt="Linkedin"
                      />
                      Linkedin
                    </a>
                    <a href="https://github.com/salomaosilval" target="_blank">
                      <img
                        src="https://media.graphassets.com/4lDgbi8FQpq8QYSiranx"
                        alt="Github"
                      />
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <SlideButton />
            <SlideButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionDepoimentos;
