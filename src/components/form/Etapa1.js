import styles from "./Formulario.module.css";

function Etapa1() {
  return (
    <div className={`${styles.div_etapa_1}`}>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="fullName">Nome completo</label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <input
            id="fullName"
            placeholder="Qual seu nome completo?"
            name="fullName"
          />
        </div>
      </div>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="age">Idade</label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <input
            id="age"
            type="number"
            placeholder="Qual sua idade?"
            name="age"
          />
        </div>
      </div>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="email">Email</label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <input
            id="email"
            type="email"
            placeholder="Qual seu email de contato?"
            name="email"
          />
        </div>
      </div>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="github">Github</label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <input
            id="github"
            type="text"
            placeholder="Qual seu Github?"
            name="github"
          />
        </div>
      </div>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="linkedin">Linkedin</label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <input
            id="linkedin"
            type="text"
            placeholder="Qual seu Linkedin?"
            name="linkedin"
          />
        </div>
      </div>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="developmentSide">
            Onde você gosta mais de trabalhar?
          </label>
        </div>
        <div className="sc-guJBdh kuhoTQ">
          <input
            id="frontend"
            type="radio"
            name="developmentSide"
            className="sc-hZDyAQ kMeIWp"
            value="frontend"
          />
          <label for="frontend">Frontend</label>
        </div>
        <div className="sc-guJBdh kuhoTQ">
          <input
            id="backend"
            type="radio"
            name="developmentSide"
            className="sc-hZDyAQ kMeIWp"
            value="backend"
          />
          <label for="backend">Backend</label>
        </div>
      </div>
    </div>
  );
}

export default Etapa1;
