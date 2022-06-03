import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Categoria from "./pages/Categoria";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias/:categoria" element={<Categoria />} />
        <Route path="/producto/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
