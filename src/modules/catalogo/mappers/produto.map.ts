import { Produto } from "../domain/produto/produto.entity";
import { IProduto } from "../domain/produto/produto.types";

class ProdutoMap {
  public static toDIO(produto: Produto): IProduto {
    return {
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      descricao: produto.descricao,
      categoria: produto.categoria,
    };
  }
}

export { ProdutoMap };
