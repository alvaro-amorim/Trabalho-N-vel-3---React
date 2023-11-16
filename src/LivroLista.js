import React, { useState, useEffect } from "react";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

function LinhaLivro({ livro, excluir }) {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        <div>{livro.titulo}</div>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

function LivroLista() {
  const controleLivro = new ControleLivros();
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setCarregado(!carregado);
  };

  return (
    <main class="fs-5" style={{ width: "80%", margin: "0 auto" }}>
      <h1 style={{ textAlign: "left", color: "black" }}>Catálogo de Livros</h1>
      <table
        class="table table-striped table-hover"
        style={{ textAlign: "left" }}
      >
        <thead class="table-dark">
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Resumo</th>
            <th scope="col">Editora</th>
            <th scope="col">Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default LivroLista;
