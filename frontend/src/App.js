import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bio from "./pages/Bio";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Bio />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus  */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
