import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

// Componente funcional Documentos
const Documentos = () => {
  return (
    // Container principal com alinhamento central
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-center">
        {/* Título da seção */}
        <h1>Documentos</h1>
        {/* Texto explicativo */}
        <p>
          Aqui você encontra links para a documentação das tecnologias que eu
          utilizo.
        </p>
        {/* Lista de links para documentação */}
        <ul className="list-unstyled">
          {/* Link para a documentação do HTML5 */}
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FontAwesomeIcon icon={faHtml5} />
            HTML5 |
          </a>{" "}
          {/* Link para a documentação do CSS3 */}
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FontAwesomeIcon icon={faCss3} />
            CSS3 |
          </a>{" "}
          {/* Link para a documentação do JavaScript */}
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FontAwesomeIcon icon={faJs} />
            JAVASCRIPT |
          </a>{" "}
          {/* Link para a documentação do React.js */}
          <a
            href="https://pt-br.react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FontAwesomeIcon icon={faReact} />
            REACT.JS |
          </a>{" "}
          {/* Link para a documentação do Bootstrap */}
          <a
            href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FontAwesomeIcon icon={faBootstrap} />
            BOOTSTRAP
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Documentos;
