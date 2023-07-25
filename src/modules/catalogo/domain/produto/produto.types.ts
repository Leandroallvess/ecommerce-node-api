//Todos os atributos/propriedades que uma categoria deve ter no sistema

import { Categoria } from "../categoria/categoria.entity";

interface IProduto {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  categoria: Categoria;
}

type CriarProdutoProps = Omit<IProduto, "id">;

export { IProduto, CriarProdutoProps };
