import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav
          className="navbar navbar-expand-lg bg-dark fs-5"
          style={{ color: "#fff" }}
        >
          <Link to="/" className="nav-link" style={{ padding: "1em" }}>
            Catálogo
          </Link>
          <Link to="/dados" className="nav-link">
            Novo
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
