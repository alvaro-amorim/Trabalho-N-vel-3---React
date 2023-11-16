import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

function LivroDados() {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(0);
  const navigate = useNavigate();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const tratarCombo = (e) => {
    const selectedValue = e.target.value;
    setCodEditora(parseInt(selectedValue));
  };

  const incluir = (e) => {
    e.preventDefault();
    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split("\n"),
      codEditora,
    };

    controleLivro.incluir(livro);

    navigate("/");
  };

  return (
    <main style={{ width: "80%", margin: "0 auto", textAlign: "start" }}>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Resumo</label>
          <textarea
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Editora</label>
          <select
            value={codEditora}
            onChange={tratarCombo}
            className="form-control"
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Autores (1 por linha)</label>
          <textarea
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Salvar Dados
        </button>
      </form>
    </main>
  );
}

export default LivroDados;
