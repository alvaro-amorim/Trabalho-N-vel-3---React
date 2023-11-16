import { Editora } from "../modelo/Editora";

const editoras: Editora[] = [
  {
    codEditora: 0,
    nome: "Alta Books",
  },
  {
    codEditora: 1,
    nome: "Pearson",
  },
  {
    codEditora: 2,
    nome: "Addison Wesley",
  },
];

class ControleEditora {
  getEditoras(): Editora[] {
    return editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : "Editora não encontrada";
  }
}

export default ControleEditora;
