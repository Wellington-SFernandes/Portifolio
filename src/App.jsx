import { Routes, Route } from "react-router-dom";
import Header from "./components/pages/styles/header";
import Footer from "./components/pages/styles/footer";
import Inicio from "./components/pages/1-Inicio";
import Sobre from "./components/pages/2-sobre";
import Qualificacoes from "./components/pages/3-qualificacoes";
import Documentos from "./components/pages/4-documentos";
import Contatos from "./components/pages/5-contatos";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/pages/styles/styles.css";

function App() {
  return (
    <div
      style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}
    >
      <Header />
      <Routes>
        {/* Definição das rotas */}
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/qualificacoes" element={<Qualificacoes />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
