import React from "react";

// Componente funcional Qualificacoes
const Qualificacoes = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh100">
      <div className="text-center">
        <h1>Minhas Habilidades e Qualificações 🚀</h1>
        <p>Habilidades:</p>
        <p>
          Desenvolvimento Web: HTML5, CSS3, JavaScript Frameworks e Bibliotecas:
          React.js, Bootstrap, AG Grid Design Responsivo: Criação de interfaces
          adaptáveis para diversos dispositivos Gerenciamento de Estado:
          Organização e otimização de dados em aplicações React Desenvolvimento
          de Sistemas Web: Criação de soluções completas, do front-end à lógica
          de negócios Experiência Prática: Desenvolvimento de um site para
          petshop e um sistema para lavanderia
        </p>
        <p>Qualificações:</p>
        <ul className="list-unstyled">
          {/* Lista de qualificações */}
          <li>Desenvolvimento web com HTML5, CSS3 e JavaScript</li>
          <li>Frameworks e Bibliotecas: React.js, Bootstrap, AG Grid</li>
          <li>
            Design Responsivo: Estilização e layout modernos com Bootstrap
          </li>
          <li>
            Manipulação de Dados: Tabelas interativas e dinâmicas com AG Grid
          </li>
          <li>
            Desenvolvimento de Sistemas Web: Criação de soluções completas, do
            front-end à lógica de negócios
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Qualificacoes;
