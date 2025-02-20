import styles from "./Formulario.module.css";

function Formulario() {
  return (
    <section id="formulario" className="sc-kbhJrz hBJFmj">
      <h2 className="sc-ehixzo fVDZzP">Junte-se ao time!</h2>
      <p className="sc-iHmpnF gOwClE">
        Ficamos felizes em saber que você tem interesse em fazer parte do Union!
        Agora é só responder o nosso formulário
      </p>
      <nav className="sc-eyvILC MBkJl">
        <ul>
          <div data-testid="step-1-active" className="sc-gfoqjT cfvfwR">
            <li aria-current="true" className="sc-kbousE iHhOUB">
              Dados pessoais
            </li>
            <span aria-label="Etapa 1" className="sc-sLsrZ iyLGpz">
              1
            </span>
          </div>
          <div data-testid="step-2-disabled" className="sc-gfoqjT kWMGxw">
            <li aria-current="false" className="sc-kbousE iHhOUB">
              Informações técnicas
            </li>
            <span aria-label="Etapa 2" className="sc-sLsrZ iyLGpz">
              2
            </span>
          </div>
          <div data-testid="step-3-disabled" className="sc-gfoqjT kWMGxw">
            <li aria-current="false" className="sc-kbousE iHhOUB">
              Sobre você
            </li>
            <span aria-label="Etapa 3" className="sc-sLsrZ iyLGpz">
              3
            </span>
          </div>
          <div data-testid="step-4-disabled" className="sc-gfoqjT kWMGxw">
            <li aria-current="false" className="sc-kbousE iHhOUB">
              Enviar
            </li>
            <span aria-label="Etapa 4" className="sc-sLsrZ iyLGpz">
              4
            </span>
          </div>
        </ul>
      </nav>
      <div className="sc-jaXxmE jIWlBm" style="opacity: 1; transform: none;">
        <div className="sc-ibQAlb gDMmdu">
          <div className="sc-jGKxIK hPtMng">
            <span>*</span>
            <label for="fullName">Nome completo</label>
          </div>
          <div className="sc-gsFSXq eVCLgy">
            <input
              id="fullName"
              placeholder="Qual seu nome completo?"
              name="fullName"
            />
          </div>
        </div>
        <div className="sc-ibQAlb gDMmdu">
          <div className="sc-jGKxIK hPtMng">
            <span>*</span>
            <label for="age">Idade</label>
          </div>
          <div className="sc-gsFSXq eVCLgy">
            <input
              id="age"
              type="number"
              placeholder="Qual sua idade?"
              name="age"
            />
          </div>
        </div>
        <div className="sc-ibQAlb gDMmdu">
          <div className="sc-jGKxIK hPtMng">
            <span>*</span>
            <label for="email">Email</label>
          </div>
          <div className="sc-gsFSXq eVCLgy">
            <input
              id="email"
              type="email"
              placeholder="Qual seu email de contato?"
              name="email"
            />
          </div>
        </div>
        <div className="sc-ibQAlb gDMmdu">
          <div className="sc-jGKxIK hPtMng">
            <span>*</span>
            <label for="github">Github</label>
          </div>
          <div className="sc-gsFSXq eVCLgy">
            <input
              id="github"
              type="text"
              placeholder="Qual seu Github?"
              name="github"
            />
          </div>
        </div>
        <div className="sc-ibQAlb gDMmdu">
          <div className="sc-jGKxIK hPtMng">
            <span>*</span>
            <label for="linkedin">Linkedin</label>
          </div>
          <div className="sc-gsFSXq eVCLgy">
            <input
              id="linkedin"
              type="text"
              placeholder="Qual seu Linkedin?"
              name="linkedin"
            />
          </div>
        </div>
        <div className="sc-ibQAlb gDMmdu">
          <div className="sc-jGKxIK hPtMng">
            <span>*</span>
            <label for="developmentSide">
              Onde você gosta mais de trabalhar?
            </label>
          </div>
          <div className="sc-guJBdh kuhoTQ">
            <input
              id="frontend"
              type="radio"
              name="developmentSide"
              className="sc-hZDyAQ kMeIWp"
              value="frontend"
            />
            <label for="frontend">Frontend</label>
          </div>
          <div className="sc-guJBdh kuhoTQ">
            <input
              id="backend"
              type="radio"
              name="developmentSide"
              className="sc-hZDyAQ kMeIWp"
              value="backend"
            />
            <label for="backend">Backend</label>
          </div>
        </div>
        <div className="sc-gmgFlS hnYZFS">
          <button type="button" className="sc-aXZVg lnbitJ">
            <span>Voltar</span>
          </button>
          <button type="button" disabled="" className="sc-aXZVg deNrec">
            <span>Próximo</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Formulario;
