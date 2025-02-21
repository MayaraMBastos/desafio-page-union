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
        <div class="sc-kAyceB iEKqFA">
          <textarea
            id="youMotivation"
            placeholder="Qual é a sua maior motivação para fazer o que faz?"
            name="youMotivation"
          ></textarea>
        </div>
      </div>
      <div class="sc-ibQAlb gDMmdu">
        <div class="sc-jGKxIK hPtMng">
          <span>*</span>
          <label for="timeManagement">
            Como você faz para conseguir cumprir todos as suas responsabilidades
            do dia a dia?
          </label>
        </div>
        <div class="sc-kAyceB iEKqFA">
          <textarea
            id="timeManagement"
            placeholder="Como você faz para conseguir cumprir todos as suas responsabilidades do dia a dia?"
            name="timeManagement"
          ></textarea>
        </div>
      </div>
      <div class="sc-ibQAlb gDMmdu">
        <div class="sc-jGKxIK hPtMng">
          <span>*</span>
          <label for="aboutFeedback">
            Quando você recebe um feedback, como é para você?
          </label>
        </div>
        <div class="sc-kAyceB iEKqFA">
          <textarea
            id="aboutFeedback"
            placeholder="Nos conte como é para você receber feedback?"
            name="aboutFeedback"
          ></textarea>
        </div>
      </div>
      <div class="sc-ibQAlb gDMmdu">
        <div class="sc-jGKxIK hPtMng">
          <span>*</span>
          <label for="howDidYouKnow">
            Como você ficou sabendo sobre o Union?
          </label>
        </div>
        <div class="sc-kAyceB iEKqFA">
          <textarea
            id="howDidYouKnow"
            placeholder="Como você ficou sabendo sobre o Union?"
            name="howDidYouKnow"
          ></textarea>
        </div>
      </div>
      <div class="sc-ibQAlb gDMmdu">
        <div class="sc-jGKxIK hPtMng">
          <span>*</span>
          <label for="becauseParticipate">
            Por que você quer fazer parte do Union?
          </label>
        </div>
        <div class="sc-kAyceB iEKqFA">
          <textarea
            id="becauseParticipate"
            placeholder="Por que você quer fazer parte do Union?"
            name="becauseParticipate"
          ></textarea>
        </div>
      </div>
      <div class="sc-ibQAlb gDMmdu">
        <div class="sc-jGKxIK hPtMng">
          <span>*</span>
          <label for="reasonForSelected">
            Por que você deveria fazer parte do pequeno grupo que vai ter a
            oportunidade de participar do Union?
          </label>
        </div>
        <div class="sc-kAyceB iEKqFA">
          <textarea
            id="reasonForSelected"
            placeholder="Por que você deveria fazer parte do pequeno grupo que vai ter a oportunidade de participar do Union?"
            name="reasonForSelected"
          ></textarea>
        </div>
      </div>
      <div class="sc-ibQAlb gDMmdu">
        <div class="sc-fTFjTM gSCShg">
          <div class="sc-imWYAI cdEtpQ">
            <input type="checkbox" id="terms" name="isTermsAccepted" />
          </div>
          <label for="terms">Li e concordo com os </label>
          <button type="button">
            <a>termos</a>
          </button>
          .
        </div>
        <div class="sc-ktJbId cXsHmh">
          <span>Os termos devem ser aceito</span>
        </div>
      </div>
      <div class="sc-gmgFlS hnYZFS">
        <button type="button" class="sc-aXZVg lnbitJ">
          <span>Voltar</span>
        </button>
        <button type="button" disabled="" class="sc-aXZVg deNrec">
          <span>Enviar</span>
        </button>
      </div>
    </div>
  );
}

export default Etapa3;
