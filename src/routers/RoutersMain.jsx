import { Routes, Route } from "react-router-dom";
import { Store } from "../pages/Store/Store";
import { About } from "../pages/About/About";
import { Contats } from "../pages/Contats/Contats";

export const RoutersMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/contats" element={<Contats />} />
      <Route path="/Login" element={<Contats />} />
    </Routes>
  );
};
