"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import LinkButton from "../layout/LinkButton";
import Etapa1 from "./Etapa1";
import Etapa2 from "./Etapa2";
import Etapa3 from "./Etapa3";
import styles from "./Formulario.module.css";
import styleBtn from "../layout/LinkButton.module.css";

// Validação com Zod
const formSchema = z.object({
  fullName: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  age: z.number().min(18, "A idade deve ser maior/ igual a 18 anos"),
  terms: z.boolean().refine((val) => val === true, {
    message: "Você precisa aceitar os termos de uso",
  }), // Valida se o checkbox 'terms' foi marcado
});

function Formulario() {
  const [etapa, setEtapa] = useState(1);

  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods; // Pegue os erros do formulário

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      console.log("Dados enviados:", data);
      alert("Formulário enviado com sucesso!");
    } else {
      console.log("Erro de validação:", errors);
    }
  };

  return (
    <section id="formulario" className={`${styles.div_form}`}>
      <h2>Junte-se ao time!</h2>
      <p>
        Ficamos felizes em saber que você tem interesse em fazer parte do Union!
        Agora é só responder o nosso formulário.
      </p>

      <nav className={`${styles.nav_form}`}>
        <ul>
          <div
            className={`${styles.div_etapas} ${
              etapa === 1 ? styles.ativo : ""
            }`}
          >
            <li>Dados pessoais</li>
            <span>1</span>
          </div>
          <div
            className={`${styles.div_etapas} ${
              etapa === 2 ? styles.ativo : ""
            }`}
          >
            <li>Informações técnicas</li>
            <span>2</span>
          </div>
          <div
            className={`${styles.div_etapas} ${
              etapa === 3 ? styles.ativo : ""
            }`}
          >
            <li>Sobre você</li>
            <span>3</span>
          </div>
          <div
            className={`${styles.div_etapas} ${
              etapa === 4 ? styles.ativo : ""
            }`}
          >
            <li>Enviar</li>
            <span>4</span>
          </div>
        </ul>
      </nav>

      <FormProvider {...methods}>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Impede o envio padrão do formulário
            handleSubmit(onSubmit)(e); // Garante que o onSubmit seja chamado após a validação
          }}
          className={`${styles.div_etapa_1}`}
        >
          {etapa === 1 && <Etapa1 />}
          {etapa === 2 && <Etapa2 />}
          {etapa === 3 && <Etapa3 />}

          <div className="flex justify-center gap-4 mt-4">
            {etapa > 1 && (
              <LinkButton
                text="Voltar"
                href="#etapa"
                onClick={() => setEtapa(etapa - 1)}
              />
            )}

            {etapa < 3 ? (
              <LinkButton
                text="Próximo"
                href="#etapa"
                onClick={() => setEtapa(etapa + 1)}
              />
            ) : (
              <button type="submit" className={styleBtn.button}>
                Enviar
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </section>
  );
}

export default Formulario;
