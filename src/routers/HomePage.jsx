import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Store } from "../pages/Store/Store";
import { About } from "../pages/About/About";
import { Contats } from "../pages/Contats/Contats";

export const HomePages = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/inicio" element={<Store />} /> PROJETAR UM INICIO  */}
        <Route path="/" element={<Store/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contats" element={<Contats />} />
      </Routes>
    </BrowserRouter>
  );
}