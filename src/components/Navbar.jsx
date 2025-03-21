import { Link } from "react-router-dom";

// Componente funcional Navbar
const Navbar = () => {
  return (
    <nav>
      <ul>
        {/* Links de navegação */}
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/qualificacoes">Qualificações</Link>
        </li>
        <li>
          <Link to="/contatos">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
