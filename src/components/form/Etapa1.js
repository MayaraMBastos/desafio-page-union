function Etapa1() {
  return (
    <div className="sc-jaXxmE jIWlBm">
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
  );
}

export default Etapa1;
