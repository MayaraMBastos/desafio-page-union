import styles from "./Formulario.module.css";
function Etapa2() {
  return (
    <div className={`${styles.div_etapa_1}`}>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="timeLearning">
            Quanto tempo você estuda programação?
          </label>
        </div>
        <div className={`${styles.div_radios}`}>
          <input
            id="option-one"
            type="radio"
            name="timeLearning"
            className={`${styles.inputs_radios}`}
            value="1 ano"
          />
          <label for="option-one">1 ano</label>
        </div>
        <div className={`${styles.div_radios}`}>
          <input
            id="option-two"
            type="radio"
            name="timeLearning"
            className={`${styles.inputs_radios}`}
            value="2 anos"
          />
          <label for="option-two">2 anos</label>
        </div>
        <div className={`${styles.div_radios}`}>
          <input
            id="option-three"
            type="radio"
            name="timeLearning"
            className={`${styles.inputs_radios}`}
            value="3 anos"
          />
          <label for="option-three">3 anos</label>
        </div>
        <div className={`${styles.div_radios}`}>
          <input
            id="option-four"
            type="radio"
            name="timeLearning"
            className={`${styles.inputs_radios}`}
            value="Mais de 3 anos"
          />
          <label for="option-four">Mais de 3 anos</label>
        </div>
      </div>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="linkRepoBestProject">
            Link do repositório do seu melhor projeto
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <input
            id="linkRepoBestProject"
            placeholder="Qual o link para o repositório do seu melhor projeto?"
            name="linkRepoBestProject"
          />
        </div>
      </div>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="aboutBestProject">
            Fale sobre como foi construir esse projeto? Quais foram os
            aprendizados e dificuldades que teve durante o desenvolvimento?
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="aboutBestProject"
            placeholder="Fale sobre o seu melhor projeto, nos conte como foi trabalhar nesse projeto?"
            name="aboutBestProject"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Etapa2;
