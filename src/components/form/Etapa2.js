function Etapa2() {
  return (
    <div class="sc-jaXxmE jIWlBm" style="opacity: 1; transform: none;">
      <div class="sc-ibQAlb gDMmdu">
        <div class="sc-jGKxIK hPtMng">
          <span>*</span>
          <label for="timeLearning">
            Quanto tempo você estuda programação?
          </label>
        </div>
        <div class="sc-guJBdh kuhoTQ">
          <input
            id="option-one"
            type="radio"
            name="timeLearning"
            class="sc-hZDyAQ kMeIWp"
            value="1 ano"
          />
          <label for="option-one">1 ano</label>
        </div>
        <div class="sc-guJBdh kuhoTQ">
          <input
            id="option-two"
            type="radio"
            name="timeLearning"
            class="sc-hZDyAQ kMeIWp"
            value="2 anos"
          />
          <label for="option-two">2 anos</label>
        </div>
        <div class="sc-guJBdh kuhoTQ">
          <input
            id="option-three"
            type="radio"
            name="timeLearning"
            class="sc-hZDyAQ kMeIWp"
            value="3 anos"
          />
          <label for="option-three">3 anos</label>
        </div>
        <div class="sc-guJBdh kuhoTQ">
          <input
            id="option-four"
            type="radio"
            name="timeLearning"
            class="sc-hZDyAQ kMeIWp"
            value="Mais de 3 anos"
          />
          <label for="option-four">Mais de 3 anos</label>
        </div>
      </div>
      <div class="sc-ibQAlb gDMmdu">
        <div class="sc-jGKxIK hPtMng">
          <span>*</span>
          <label for="linkRepoBestProject">
            Link do repositório do seu melhor projeto
          </label>
        </div>
        <div class="sc-gsFSXq eVCLgy">
          <input
            id="linkRepoBestProject"
            placeholder="Qual o link para o repositório do seu melhor projeto?"
            name="linkRepoBestProject"
          />
        </div>
      </div>
      <div class="sc-ibQAlb gDMmdu">
        <div class="sc-jGKxIK hPtMng">
          <span>*</span>
          <label for="aboutBestProject">
            Fale sobre como foi construir esse projeto? Quais foram os
            aprendizados e dificuldades que teve durante o desenvolvimento?
          </label>
        </div>
        <div class="sc-kAyceB iEKqFA">
          <textarea
            id="aboutBestProject"
            placeholder="Fale sobre o seu melhor projeto, nos conte como foi trabalhar nesse projeto?"
            name="aboutBestProject"
          ></textarea>
        </div>
      </div>
      <div class="sc-gmgFlS hnYZFS">
        <button type="button" class="sc-aXZVg lnbitJ">
          <span>Voltar</span>
        </button>
        <button type="button" disabled="" class="sc-aXZVg deNrec">
          <span>Próximo</span>
        </button>
      </div>
    </div>
  );
}

export default Etapa2;
