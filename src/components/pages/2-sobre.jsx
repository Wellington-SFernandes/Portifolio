import React from "react";

const Sobre = () => {
  return (
    <div className="container d-flex flex-column justify-content-center">
      {/* Título centralizado */}
      <div className="row w-100 text-center mb-4">
        <div className="col-12">
          <h1>História</h1>
        </div>
      </div>

      {/* Conteúdo dividido em duas colunas */}
      <div className="row w-100">
        {/* Coluna da esquerda: Minha Jornada */}
        <div className="col-12 col-md-6 text-center text-md-end border-end pe-md-4 mb-4 mb-md-0">
          <h2>Minha Trajetória</h2>
          <p>
            Sou Supervisor de transporte em uma transportadora que atua no Porto
            de Santos - SP, onde adquiri vasta experiência em logística, gestão
            de equipes e otimização de processos operacionais. Sempre fui
            apaixonado por tecnologia e, nos últimos anos, venho me
            especializando no desenvolvimento web, combinando minha expertise no
            setor de transportes com soluções digitais para otimização de
            serviços. Tenho experiência sólida com HTML5, CSS3, JavaScript e
            frameworks modernos, como React.js e Bootstrap, além de conhecimento
            em gerenciamento de estados, integração com APIs e desenvolvimento
            de interfaces responsivas e intuitivas.
          </p>
        </div>

        {/* Coluna da direita: Meu Futuro */}
        <div className="col-12 col-md-6 text-center text-md-start ps-md-4">
          <h2>Meus Próximos Passos</h2>
          <p>
            Combinando minha experiência em gestão logística e desenvolvimento
            web, meu objetivo é ingressar profissionalmente como desenvolvedor
            front-end e, posteriormente, expandir minha atuação para o back-end,
            tornando-me um desenvolvedor full stack. Continuarei aprimorando
            minhas habilidades em JavaScript, React.js, segurança de rede e boas
            práticas de desenvolvimento, buscando criar soluções inovadoras que
            otimizem processos e impulsionem negócios. No futuro, desejo unir
            minha expertise em tecnologia e transportes para desenvolver sistemas
            eficientes e escaláveis, contribuindo para a transformação digital no
            setor logístico e em outras áreas. 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;