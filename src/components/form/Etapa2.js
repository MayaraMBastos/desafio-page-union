import { useFormContext } from "react-hook-form";
import styles from "./Formulario.module.css";

function Etapa2() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${styles.div_etapa_1}`}>
      {/* Tempo estudando programação */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="timeLearning">
            Quanto tempo você estuda programação?
          </label>
        </div>
        <div className={`${styles.div_radios}`}>
          <input
            id="option-one"
            type="radio"
            value="1 ano"
            {...register("timeLearning", { required: "Selecione uma opção" })}
          />
          <label htmlFor="option-one">1 ano</label>
        </div>
        <div className={`${styles.div_radios}`}>
          <input
            id="option-two"
            type="radio"
            value="2 anos"
            {...register("timeLearning")}
          />
          <label htmlFor="option-two">2 anos</label>
        </div>
        <div className={`${styles.div_radios}`}>
          <input
            id="option-three"
            type="radio"
            value="3 anos"
            {...register("timeLearning")}
          />
          <label htmlFor="option-three">3 anos</label>
        </div>
        <div className={`${styles.div_radios}`}>
          <input
            id="option-four"
            type="radio"
            value="Mais de 3 anos"
            {...register("timeLearning")}
          />
          <label htmlFor="option-four">Mais de 3 anos</label>
        </div>
        {errors.timeLearning && (
          <p className={styles.error}>{errors.timeLearning.message}</p>
        )}
      </div>

      {/* Link do melhor projeto */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="linkRepoBestProject">
            Link do repositório do seu melhor projeto
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <input
            id="linkRepoBestProject"
            type="text"
            placeholder="Cole o link aqui..."
            {...register("linkRepoBestProject", {
              required: "Insira o link do repositório",
              pattern: {
                value: /^(https?:\/\/)?(www\.)?github\.com\/.+/,
                message: "Insira um link válido do GitHub",
              },
            })}
          />
          {errors.linkRepoBestProject && (
            <p className={styles.error}>{errors.linkRepoBestProject.message}</p>
          )}
        </div>
      </div>

      {/* Sobre o melhor projeto */}
      <div className={`${styles.div_inputs}`}>
        <div className={`${styles.div_inputs_w}`}>
          <span>*</span>
          <label htmlFor="aboutBestProject">
            Fale sobre como foi construir esse projeto
          </label>
        </div>
        <div className={`${styles.div_inputs_p}`}>
          <textarea
            id="aboutBestProject"
            placeholder="Descreva sua experiência com o projeto..."
            {...register("aboutBestProject", {
              required: "Descreva sua experiência com o projeto",
              minLength: {
                value: 20,
                message: "O texto deve ter pelo menos 20 caracteres",
              },
            })}
          ></textarea>
          {errors.aboutBestProject && (
            <p className={styles.error}>{errors.aboutBestProject.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Etapa2;
