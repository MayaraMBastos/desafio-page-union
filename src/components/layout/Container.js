import SectionTop from "./sections/SectionTop";
import styles from "./Container.module.css";
import SectionSobre from "./sections/SectionSobre";
import SectionPilares from "./sections/SectionPilares";
import SectionBeneficios from "./sections/SectionBeneficios";
import SectionEtapas from "./sections/SectionEtapas";

function Container() {
  return (
    <main className="flex flex-col">
      <SectionTop />
      <div className={`${styles.display_sections}`}>
        <SectionSobre />
        <SectionPilares />
        <SectionBeneficios />
        <SectionEtapas />
      </div>
    </main>
  );
}

export default Container;
