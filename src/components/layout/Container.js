import SectionTop from "./sections/SectionTop";
import styles from "./Container.module.css";
import SectionSobre from "./sections/SectionSobre";
import SectionPilares from "./sections/SectionPilares";
import SectionBeneficios from "./sections/SectionBeneficios";
import SectionEtapas from "./sections/SectionEtapas";
import SectionInscrever from "./sections/SectionInscrever";
import SectionDepoimentos from "./sections/SectionDepoimentos";
import Formulario from "../form/Formulario";

function Container() {
  return (
    <main className="flex flex-col mt-[6.9rem]">
      <SectionTop />
      <div className={`${styles.display_sections}`}>
        <SectionSobre />
        <SectionPilares />
        <SectionBeneficios />
        <SectionEtapas />
      </div>
      <div>
        <div className={`${styles.display_sections}`}>
          <SectionInscrever />
        </div>
        <div className={`${styles.display_sections}`}>
          <SectionDepoimentos />
        </div>
        <div className={`${styles.display_sections}`}>
          <Formulario />
        </div>

        <div className={`${styles.display_sections}`}>
          <p>duvidas</p>
        </div>
      </div>
    </main>
  );
}

export default Container;
