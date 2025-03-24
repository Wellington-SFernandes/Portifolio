import React from "react";

const Qualificacoes = () => {
  return (
    <div className="container d-flex flex-column justify-content-center">
      {/* Título centralizado */}
      <div className="row w-100 text-center mb-4">
        <div className="col-12">
          <h1>Minhas Habilidades e Qualificações 🚀</h1>
        </div>
      </div>

      {/* Conteúdo dividido em duas colunas */}
      <div className="row w-100">
        {/* Coluna da esquerda: Habilidades */}
        <div className="col-12 col-md-6 text-center text-md-end border-end pe-md-4 mb-4 mb-md-0">
          <h2>Habilidades</h2>
          <ul className="list-unstyled">
            <li>Desenvolvimento Web: HTML5, CSS3, JavaScript</li>
            <li>Frameworks e Bibliotecas: React.js, Bootstrap, AG Grid</li>
            <li>Design Responsivo: Interfaces adaptáveis para dispositivos</li>
            <li>Gerenciamento de Estado: Organização de dados em React</li>
            <li>Desenvolvimento de Sistemas Web: Soluções completas</li>
          </ul>
        </div>

        {/* Coluna da direita: Qualificações */}
        <div className="col-12 col-md-6 text-center text-md-start ps-md-4">
          <h2>Qualificações</h2>
          <ul className="list-unstyled">
            <li>Desenvolvimento web com HTML5, CSS3 e JavaScript</li>
            <li>Frameworks e Bibliotecas: React.js, Bootstrap, AG Grid</li>
            <li>Design Responsivo: Layouts modernos com Bootstrap</li>
            <li>Manipulação de Dados: Tabelas dinâmicas com AG Grid</li>
            <li>Criação de sistemas completos: Front-end e lógica de negócios</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Qualificacoes;