import styles from "./SectionBeneficios.module.css";
import stylesContainer from "../Container.module.css";

function SectionBeneficios() {
  return (
    <section
      className={`${stylesContainer.section} ${stylesContainer.section_text}`}
    >
      <div className={`${styles.div_linhas_title}`}>
        <div
          aria-label="Linha a esquerda do titulo"
          className={`left-0 ${styles.div_linha}`}
        ></div>
        <h2 className="sc-fqkvVR ldfcuN">Benefícios</h2>
        <div
          aria-label="Linha a direita do titulo"
          className={`right-0 ${styles.div_linha}`}
        ></div>
      </div>
      <p>
        Conheça os benefícios incríveis que o Union proporciona para seus
        membros!
      </p>
      <div className="mt-[5rem] max-w-[114rem] pl-[1.1rem]">
        <div className="flex flex-col gap-[10rem]">
          <div className={`${styles.div_cards}`}>
            <div>
              <img
                src="https://media.graphassets.com/qssZQEUSEaAQoM6oznCw"
                alt="Ícone de um foguete"
              />
            </div>
            <div className={`text-left ${styles.div_card_text}`}>
              <h3>Preparação para o mercado</h3>

              <p>
                Os membros são equipados com uma compreensão profunda das
                práticas de mercado, permitindo-lhes ingressar no setor com
                confiança e conhecimento.
              </p>
            </div>
          </div>
          <div className={`flex-row-reverse ${styles.div_cards}`}>
            <div className="">
              <img
                src="https://media.graphassets.com/tsqge8g9TpyED5o5iVr6"
                alt="Ícone de duas ferramentas"
              />
            </div>
            <div className={`text-right ${styles.div_card_text}`}>
              <h3>Aprendizado de novas tecnologias e ferramentas</h3>

              <p className="text-right">
                Os membros são expostos a uma variedade de tecnologias e
                ferramentas relevantes, expandindo suas habilidades e
                conhecimentos.
              </p>
            </div>
          </div>
          <div className={`${styles.div_cards}`}>
            <div>
              <img
                src="https://media.graphassets.com/XH5lk8IJQ1Cz1M2AE1Lu"
                alt="Ícone de um controle de video game"
              />
            </div>
            <div className={`text-left ${styles.div_card_text}`}>
              <h3>Desenvolvimento de hard skills</h3>

              <p>
                Através de projetos reais, os membros fortalecem suas
                habilidades técnicas, aumentando sua capacidade de contribuir de
                forma eficaz em ambientes profissionais.
              </p>
            </div>
          </div>
          <div className={`flex-row-reverse ${styles.div_cards}`}>
            <div>
              <img
                src="https://media.graphassets.com/eBMuKBvTLulsEbZySGwt"
                alt="Ícone de um estrela"
              />
            </div>
            <div className={`text-right ${styles.div_card_text}`}>
              <h3>Desenvolvimento de soft skills</h3>

              <p className="text-right">
                Além das competências técnicas, os membros aprimoram habilidades
                interpessoais cruciais, como comunicação eficaz, resolução de
                conflitos e trabalho em equipe.
              </p>
            </div>
          </div>
          <div className={`${styles.div_cards}`}>
            <div>
              <img
                src="https://media.graphassets.com/2S5Pdk5oShOJUlIz8p7X"
                alt="Ícone de um planeta"
              />
            </div>
            <div className={`text-left ${styles.div_card_text}`}>
              <h3>Ambiente imersivo</h3>
              <p>
                O Union oferece uma oportunidade única de aplicar conhecimentos
                teóricos em cenários do mundo real, proporcionando uma
                experiência diferenciada e valiosa.
              </p>
            </div>
          </div>
          <div className={`flex-row-reverse ${styles.div_cards}`}>
            <div>
              <img
                src="https://media.graphassets.com/WR1yF2qGRmm8jWLCyw0D"
                alt="Ícone de um sinal de positivo"
              />
            </div>
            <div className={`text-right ${styles.div_card_text}`}>
              <h3>Networking </h3>
              <p className="text-right">
                A participação no Union expande sua rede de contatos, abrindo
                portas para colaborações futuras e oportunidades profissionais.
              </p>
            </div>
          </div>
          <div className={`${styles.div_cards}`}>
            <div>
              <img
                src="https://media.graphassets.com/KHCFnl40RyKQqOx6Bjuz"
                alt="Ícone de uma lâmpada acessa"
              />
            </div>
            <div className={`text-left ${styles.div_card_text}`}>
              <h3>Domínio de metodologias ágeis</h3>
              <p>
                Através da vivência prática, os membros aprendem a aplicar
                metodologias ágeis como Scrum, preparando-os para ambientes de
                trabalho colaborativos.
              </p>
            </div>
          </div>
          <div className={`flex-row-reverse ${styles.div_cards}`}>
            <div>
              <img
                src="https://media.graphassets.com/sanArFzbQUipTnjRVl78"
                alt="Ícone de um avatar representando uma pessoa"
              />
            </div>
            <div className={`text-right ${styles.div_card_text}`}>
              <h3>Mentória</h3>
              <p className="text-right">
                Os mentores experientes oferecem orientação valiosa,
                proporcionando uma trajetória de aprendizado mais suave e
                eficiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionBeneficios;
