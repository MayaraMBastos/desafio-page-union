import { useFormContext } from "react-hook-form";
import styles from "./Formulario.module.css";

function Etapa1() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${styles.div_etapa_1}`}>
      {/* Nome completo */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="fullName">Nome completo</label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <input
            id="fullName"
            placeholder="Qual seu nome completo?"
            {...register("fullName", { required: "Nome é obrigatório" })}
          />
          {errors.fullName && (
            <p className={styles.error}>{errors.fullName.message}</p>
          )}
        </div>
      </div>

      {/* Idade */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="age">Idade</label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <input
            id="age"
            type="number"
            placeholder="Qual sua idade?"
            {...register("age", { required: "Idade é obrigatória" })}
          />
          {errors.age && <p className={styles.error}>{errors.age.message}</p>}
        </div>
      </div>

      {/* Email */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="email">Email</label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <input
            id="email"
            type="email"
            placeholder="Qual seu email de contato?"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: { value: /\S+@\S+\.\S+/, message: "Email inválido" },
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Github */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="github">Github</label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <input
            id="github"
            type="text"
            placeholder="Qual seu Github?"
            {...register("github", { required: "Github é obrigatório" })}
          />
          {errors.github && (
            <p className={styles.error}>{errors.github.message}</p>
          )}
        </div>
      </div>

      {/* Linkedin */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="linkedin">Linkedin</label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <input
            id="linkedin"
            type="text"
            placeholder="Qual seu Linkedin?"
            {...register("linkedin", { required: "Linkedin é obrigatório" })}
          />
          {errors.linkedin && (
            <p className={styles.error}>{errors.linkedin.message}</p>
          )}
        </div>
      </div>

      {/* Onde gosta mais de trabalhar? (Radio Buttons) */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label>Onde você gosta mais de trabalhar?</label>
        </div>
        <div className={`${styles.div_radios}`}>
          <input
            id="frontend"
            type="radio"
            value="frontend"
            {...register("developmentSide", { required: "Escolha uma opção" })}
          />
          <label htmlFor="frontend">Frontend</label>
        </div>
        <div className={`${styles.div_radios}`}>
          <input
            id="backend"
            type="radio"
            value="backend"
            {...register("developmentSide")}
          />
          <label htmlFor="backend">Backend</label>
        </div>
        {errors.developmentSide && (
          <p className={styles.error}>{errors.developmentSide.message}</p>
        )}
      </div>
    </div>
  );
}

export default Etapa1;
