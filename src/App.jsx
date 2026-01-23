import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Home from "./componentes/secciones/home";
import About from "./componentes/secciones/about";
import Cursos from "./componentes/secciones/Cursos";
import Testimonios from "./componentes/secciones/Testimonios";
import Contacto from "./componentes/secciones/Contacto";
import Login from "./componentes/secciones/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;