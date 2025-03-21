import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Componente funcional Contatos
const Contatos = () => {
  return (
    // Container principal com alinhamento central
    <div className="d-flex justify-content-center align-items-center vh100">
      <div className="text-center">
        {/* Título da seção */}
        <h1>Entre em contato comigo!</h1>
        {/* Texto explicativo */}
        <p>Você pode me encontrar nas seguintes redes sociais:</p>
        {/* Lista de links para redes sociais */}
        <ul className="list-unstyled">
          {/* Link para o LinkedIn */}
          <a
            href="https://www.linkedin.com/in/wellington-fernandes93/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>{" "}
          {/* Link para o GitHub */}
          <a
            href="https://github.com/Wellington-SFernandes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>{" "}
          {/* Link para o e-mail */}
          <a
            href="mailto:Wellsf.1993@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FontAwesomeIcon icon={faEnvelope} /> E-mail
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Contatos;
