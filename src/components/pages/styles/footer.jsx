import React from "react";

// Componente funcional Footer
const Footer = () => {
  return (
    // Container principal do rodapé
    <div className="container">
      {/* Elemento footer com classes do Bootstrap para estilização */}
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        {/* Seção do rodapé contendo o texto e o ícone */}
        <div className="col-md-4 d-flex align-items-center">
          {/* Link para a página inicial com ícone */}
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            {/* Ícone SVG */}
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          {/* Texto do rodapé com copyright */}
          <span className="mb-3 mb-md-0 text-body-secondary text-white">
            &copy; 2024 Wellington Fernandes, Inc
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
