"use client";
import { useState } from "react";
import stylesContainer from "../Container.module.css";
import DuvidaButton from "../DuvidaButton";
import stylesBeneficios from "./SectionBeneficios.module.css";
import styles from "./SectionDuvidas.module.css";

function SectionDuvidas() {
  const [openDuvida, setOpenDuvida] = useState(null); // Estado para controlar qual está aberto

  const toggleDuvida = (id) => {
    setOpenDuvida(openDuvida === id ? null : id); // Alterna entre abrir e fechar
  };
  return (
    <section id="duvidas" className={`${stylesContainer.section}`}>
      <div className={`${stylesBeneficios.div_linhas_title}`}>
        <div
          aria-label="Linha a esquerda do titulo"
          className={`left-0 ${stylesBeneficios.div_linha}`}
        ></div>
        <h2 className="sc-fqkvVR ldfcuN">Duvidas</h2>
        <div
          aria-label="Linha a direita do titulo"
          className={`right-0 ${stylesBeneficios.div_linha}`}
        ></div>
      </div>

      <div className={`${styles.div_duvidas}`}>
        <dl>
          <DuvidaButton
            text="O que é o Union?"
            id="duvida1"
            isOpen={openDuvida === "duvida1"}
            onClick={() => toggleDuvida("duvida1")}
            textCard=" O Union é um ambiente prático e imersivo que busca simular o
                mais próximo do que você vai encontrar nas empresas, desafiando
                seus membros a resolver problemas reais, com cronogramas e
                prazos de entrega.\n
             
                No Union, você desenvolve as skills mais procuradas pelo
                mercado, trabalha com ferramentas e metodologias utilizada pelas
                empresas, além de ganhar experiência trabalhando com outras
                pessoas de diferentes partes do Brasil.\n
             
                Você vivência na prática como é o dia a dia de um desenvolver em
                uma empresa e fica mais preparado para conquistar uma vaga."
          />

          <DuvidaButton
            text="Quanto custa para fazer parte do Union?"
            id="duvida2"
            isOpen={openDuvida === "duvida2"}
            onClick={() => toggleDuvida("duvida2")}
            textCard="Nada! O Union é 100% gratuito."
          />

          <DuvidaButton
            text="Quem pode participar?"
            id="duvida3"
            isOpen={openDuvida === "duvida3"}
            onClick={() => toggleDuvida("duvida3")}
            textCard="Pessoas que ainda não trabalham na área e que não participem de
                bootcamps ou plataformas de capacitação."
          />
          <DuvidaButton
            text="Preciso ter experiência na área?"
            id="duvida4"
            isOpen={openDuvida === "duvida4"}
            onClick={() => toggleDuvida("duvida4")}
            textCard=" Sim. Você precisa ter no mínimo 1 ano de estudo em programação,
                além disso é necessário que já tenha criado algum projeto
                sozinho, sem que seja projetos guiados, como de cursos e
                eventos."
          />

          <DuvidaButton
            text="Qual a idade mínima para fazer parte do Union?"
            id="duvida5"
            isOpen={openDuvida === "duvida5"}
            onClick={() => toggleDuvida("duvida5")}
            textCard="Você precisa ter no mínimo 18 anos."
          />

          <DuvidaButton
            text="Como me inscrevo?"
            id="duvida6"
            isOpen={openDuvida === "duvida6"}
            onClick={() => toggleDuvida("duvida6")}
            textCard="Se você se encaixa nos requisitos obrigatórios basta preencher o
                nosso formulário e fazer sua pré-inscrição."
          />

          <DuvidaButton
            text="Existe algum processo seletivo? Como funciona?"
            id="duvida7"
            isOpen={openDuvida === "duvida7"}
            onClick={() => toggleDuvida("duvida7")}
            textCard="  Nosso processo seletivo consiste em algumas etapas, que são:
                pré-inscrição pelo formulário da página, análise de suas
                informações no formulário, desafio técnico e uma entrevista com
                nosso time.
                
                Nosso objetivo é entender seu momento profissional e avaliar se
                você tem o perfil que buscamos para o Union.
                "
          />

          <DuvidaButton
            text="O que vou aprender?"
            id="duvida8"
            isOpen={openDuvida === "duvida8"}
            onClick={() => toggleDuvida("duvida8")}
            textCard="Você aprenderá como trabalhar com metodologias e ferramentas
                utilizadas pelas empresas, desenvolver hard e soft skills, tudo
                de forma prática e mão na massa!"
          />

          <DuvidaButton
            text="Quanto tempo por dia preciso me dedicar aos projetos?"
            id="duvida9"
            isOpen={openDuvida === "duvida9"}
            onClick={() => toggleDuvida("duvida9")}
            textCard="Você precisa ter disponibilidade de trabalhar no mínimo 1 hora
                por dia no projeto, é importante também ter disponibilidade para
                participar das reuniões do time, que acontecem diariamente e aos
                finais de semana."
          />
        </dl>
      </div>
    </section>
  );
}

export default SectionDuvidas;
