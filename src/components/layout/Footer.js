import style from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={`${style.div_footer}`}>
        <div className={`${style.div_img}`}>
          <img
            src="https://media.graphassets.com/2rObY82rREidExKivdTB"
            alt=""
            loading="lazy"
            className="sc-fjvvzt kMrRzy"
          />
          <div className={`${style.div_text}`}>
            <p>
              O Union proporciona experiência para desenvolvedores juniors,
              transformando-os em profissionais preparados para o mercado.
            </p>
          </div>
        </div>
        <nav aria-label="Navegação rodapé" className="sc-hknOHE bKJhiQ">
          <div className="sc-uVWWZ iWdgoV">
            <h2 id="clkt1jt6v8nov0blw59n6jfqr">Saiba mais</h2>
            <ul aria-labelledby="clkt1jt6v8nov0blw59n6jfqr">
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#depoimentos">Depoimentos</a>
              </li>
            </ul>
          </div>
          <div className="sc-uVWWZ iWdgoV">
            <h2 id="clkt1jt6v8nos0blwvxmim7zp">Dúvidas</h2>
            <ul aria-labelledby="clkt1jt6v8nos0blwvxmim7zp">
              <li>
                <a href="#duvidas">FAQ</a>
              </li>
              <li>
                <a href="#etapas">Como funciona</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="sc-hCPjZK ZFlzy">
          <a
            aria-label="Email"
            href="mailto:contato.uniongroup@gmail.com"
            target="_blank"
          >
            <div className="sc-Nxspf cWzYBs">
              <img
                src="https://media.graphassets.com/4AjPcOSSuK4kIKUv8Mdg"
                alt="Email"
                title="Email"
              />
              Email
            </div>
          </a>
          <a
            aria-label="Linkedin"
            href="https://www.linkedin.com/company/union-developers-group"
            target="_blank"
          >
            <div className="sc-Nxspf cWzYBs">
              <img
                src="https://media.graphassets.com/y4KMQdygSH6uZx46pxjU"
                alt="Linkedin"
                title="Linkedin"
              />
              Linkedin
            </div>
          </a>
          <a
            aria-label="Github"
            href="https://github.com/union-developers-group"
            target="_blank"
          >
            <div className="sc-Nxspf cWzYBs">
              <img
                src="https://media.graphassets.com/4lDgbi8FQpq8QYSiranx"
                alt="Github"
                title="Github"
              />
              Github
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
