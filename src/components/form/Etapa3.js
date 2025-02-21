import styles from "./Formulario.module.css";
function Etapa3() {
  return (
    <div className={`${styles.div_etapa_1}`}>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="youMotivation">
            Por que você gosta de programar? Qual sua maior motivação?
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="youMotivation"
            placeholder="Qual é a sua maior motivação para fazer o que faz?"
            name="youMotivation"
          ></textarea>
        </div>
      </div>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="timeManagement">
            Como você faz para conseguir cumprir todos as suas responsabilidades
            do dia a dia?
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="timeManagement"
            placeholder="Como você faz para conseguir cumprir todos as suas responsabilidades do dia a dia?"
            name="timeManagement"
          ></textarea>
        </div>
      </div>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="aboutFeedback">
            Quando você recebe um feedback, como é para você?
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="aboutFeedback"
            placeholder="Nos conte como é para você receber feedback?"
            name="aboutFeedback"
          ></textarea>
        </div>
      </div>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="howDidYouKnow">
            Como você ficou sabendo sobre o Union?
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="howDidYouKnow"
            placeholder="Como você ficou sabendo sobre o Union?"
            name="howDidYouKnow"
          ></textarea>
        </div>
      </div>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="becauseParticipate">
            Por que você quer fazer parte do Union?
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="becauseParticipate"
            placeholder="Por que você quer fazer parte do Union?"
            name="becauseParticipate"
          ></textarea>
        </div>
      </div>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label for="reasonForSelected">
            Por que você deveria fazer parte do pequeno grupo que vai ter a
            oportunidade de participar do Union?
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="reasonForSelected"
            placeholder="Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?"
            name="reasonForSelected"
          ></textarea>
        </div>
      </div>
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_checkbox}`}>
          <div>
            <input
              type="checkbox"
              id="terms"
              name="isTermsAccepted"
              className={`${styles.div_checkbox_caixa}`}
            />
          </div>
          <label for="terms">Li e concordo com os termos </label>
        </div>
        <div className={`${styles.div_inputs_w}`}>
          <span>Os termos devem ser aceito</span>
        </div>
      </div>
    </div>
  );
}

export default Etapa3;
