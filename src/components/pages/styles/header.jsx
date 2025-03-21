import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.svg";

// Componente funcional Header
function Header() {
  return (
    <Navbar bg="primary" variant="primary" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />{" "}
          Portfólio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Links de navegação */}
            <Nav.Link as={Link} to="/">
              Início
            </Nav.Link>
            <Nav.Link as={Link} to="/sobre">
              Sobre
            </Nav.Link>
            <Nav.Link as={Link} to="/qualificacoes">
              Qualificações
            </Nav.Link>
            <Nav.Link as={Link} to="/documentos">
              Documentos
            </Nav.Link>
            <Nav.Link as={Link} to="/contatos">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
