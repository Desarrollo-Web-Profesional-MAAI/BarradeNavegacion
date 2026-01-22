import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Banner from "./componentes/Banner";
import Cursos from "./componentes/secciones/Cursos";
import About from "./componentes/secciones/about";
import Home from "./componentes/secciones/home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;