"use client";

import LinkButton from "../layout/LinkButton";
import Etapa1 from "./Etapa1";
import Etapa2 from "./Etapa2";
import Etapa3 from "./Etapa3";
import styles from "./Formulario.module.css";

import { useState } from "react";
import RequestButton from "./RequestButton";

function Formulario() {
  const [etapa, setEtapa] = useState(1); // Estado da etapa

  return (
    <section id="formulario" className={`${styles.div_form}`}>
      <h2>Junte-se ao time!</h2>
      <p>
        Ficamos felizes em saber que você tem interesse em fazer parte do Union!
        Agora é só responder o nosso formulário
      </p>
      <nav className={`${styles.nav_form}`}>
        <ul>
          <div data-testid="step-1-active" className={`${styles.div_etapas}`}>
            <li aria-current="true" className="sc-kbousE iHhOUB">
              Dados pessoais
            </li>
            <span aria-label="Etapa 1" className="sc-sLsrZ iyLGpz">
              1
            </span>
          </div>
          <div data-testid="step-2-disabled" className={`${styles.div_etapas}`}>
            <li aria-current="false" className="sc-kbousE iHhOUB">
              Informações técnicas
            </li>
            <span aria-label="Etapa 2" className="sc-sLsrZ iyLGpz">
              2
            </span>
          </div>
          <div data-testid="step-3-disabled" className={`${styles.div_etapas}`}>
            <li aria-current="false" className="sc-kbousE iHhOUB">
              Sobre você
            </li>
            <span aria-label="Etapa 3" className="sc-sLsrZ iyLGpz">
              3
            </span>
          </div>
          <div data-testid="step-4-disabled" className={`${styles.div_etapas}`}>
            <li aria-current="false" className="sc-kbousE iHhOUB">
              Enviar
            </li>
            <span aria-label="Etapa 4" className="sc-sLsrZ iyLGpz">
              4
            </span>
          </div>
        </ul>
      </nav>
      {etapa === 1 && <Etapa1 />}
      {etapa === 2 && <Etapa2 />}
      {etapa === 3 && <Etapa3 />}
      <div className="flex gap-4 mt-4">
        {etapa > 1 && (
          <LinkButton
            text="Voltar"
            href="#etapa"
            onClick={() => setEtapa(etapa - 1)}
          />
        )}

        {etapa < 3 && (
          <LinkButton
            text="Próximo"
            href="#etapa"
            onClick={() => setEtapa(etapa + 1)}
          />
        )}

        {etapa === 3 && (
          <RequestButton onClick={() => alert("Enviando requisição...")} />
        )}
      </div>
    </section>
  );
}

export default Formulario;
