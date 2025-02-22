import LinkButton from "../LinkButton";
import styles from "./SectionInscrever.module.css";

function SectionInscrever() {
  return (
    <div className={`${styles.div_inscrever}`}>
      <div className={`${styles.div_inscrever_card}`}>
        <img
          src="https://media.graphassets.com/WayysMB8RQyrgcahBMQs"
          alt="Um octógono com três pontos, representando a união dos desenvolvedores"
        />
        <div className="px-[0.8rem] text-center">
          <h2>
            Vivencia na prática, ambiente imersivo, desafios e muito mais!
          </h2>
          <h3>Inscreva-se já! Vagas limitadas</h3>
          <LinkButton text={"Increver-se agora"} href={"#formulario"} />
        </div>
      </div>
    </div>
  );
}
export default SectionInscrever;
