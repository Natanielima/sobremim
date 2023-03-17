import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/menu";
import Inicio from "./pagina/Inicio";
import SobreMim from "./pagina/SobreMim";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio/>}/>
          <Route path="sobremim" element={<SobreMim/>}/>
        </Route> 
        
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
