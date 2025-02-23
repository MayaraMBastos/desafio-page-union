import { useFormContext } from "react-hook-form";
import styles from "./Formulario.module.css";

function Etapa3() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${styles.div_etapa_1}`}>
      {/* Campo: Motivação para programar */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="youMotivation">
            Por que você gosta de programar? Qual sua maior motivação?
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="youMotivation"
            placeholder="Qual é a sua maior motivação para fazer o que faz?"
            {...register("youMotivation", { required: "Campo obrigatório" })}
          ></textarea>
          {errors.youMotivation && (
            <p className={styles.error}>{errors.youMotivation.message}</p>
          )}
        </div>
      </div>

      {/* Campo: Gerenciamento de tempo */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="timeManagement">
            Como você faz para conseguir cumprir todas as suas responsabilidades
            do dia a dia?
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="timeManagement"
            placeholder="Como você faz para conseguir cumprir suas responsabilidades?"
            {...register("timeManagement", { required: "Campo obrigatório" })}
          ></textarea>
          {errors.timeManagement && (
            <p className={styles.error}>{errors.timeManagement.message}</p>
          )}
        </div>
      </div>

      {/* Campo: Feedback */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="aboutFeedback">
            Quando você recebe um feedback, como é para você?
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="aboutFeedback"
            placeholder="Nos conte como é para você receber feedback?"
            {...register("aboutFeedback", { required: "Campo obrigatório" })}
          ></textarea>
          {errors.aboutFeedback && (
            <p className={styles.error}>{errors.aboutFeedback.message}</p>
          )}
        </div>
      </div>

      {/* Campo: Como ficou sabendo do Union */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="howDidYouKnow">
            Como você ficou sabendo sobre o Union?
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="howDidYouKnow"
            placeholder="Como você ficou sabendo sobre o Union?"
            {...register("howDidYouKnow", { required: "Campo obrigatório" })}
          ></textarea>
          {errors.howDidYouKnow && (
            <p className={styles.error}>{errors.howDidYouKnow.message}</p>
          )}
        </div>
      </div>

      {/* Campo: Por que quer participar */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="becauseParticipate">
            Por que você quer fazer parte do Union?
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="becauseParticipate"
            placeholder="Por que você quer fazer parte do Union?"
            {...register("becauseParticipate", {
              required: "Campo obrigatório",
            })}
          ></textarea>
          {errors.becauseParticipate && (
            <p className={styles.error}>{errors.becauseParticipate.message}</p>
          )}
        </div>
      </div>

      {/* Campo: Por que deveria ser selecionado */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="reasonForSelected">
            Por que você deveria fazer parte do pequeno grupo que vai ter a
            oportunidade de participar do Union?
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="reasonForSelected"
            placeholder="Por que você deveria ser selecionado?"
            {...register("reasonForSelected", {
              required: "Campo obrigatório",
            })}
          ></textarea>
          {errors.reasonForSelected && (
            <p className={styles.error}>{errors.reasonForSelected.message}</p>
          )}
        </div>
      </div>

      {/* Checkbox: Aceitar termos */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_checkbox}`}>
          <div>
            <input
              type="checkbox"
              id="terms"
              {...register("isTermsAccepted", {
                required: "Você deve aceitar os termos",
              })}
              className={`${styles.div_checkbox_caixa}`}
            />
          </div>
          <label htmlFor="terms">Li e concordo com os termos</label>
        </div>
        {errors.isTermsAccepted && (
          <p className={styles.error}>{errors.isTermsAccepted.message}</p>
        )}
      </div>
    </div>
  );
}

export default Etapa3;
