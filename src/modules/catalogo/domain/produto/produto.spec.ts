import { describe, test, expect } from "vitest";
import { CriarProdutoProps } from "../produto/produto.types";
import { Categoria } from "../categoria/categoria.entity";
import {
  NomeProdutoTamanhoMaximoInvalido,
  NomeProdutoTamanhoMinimoInvalido,
} from "./produto.exception";
import { Produto } from "./produto.entity";

describe("Entidade de Dominio da Produto", () => {
  test("Deve Criar um Produto Válido", async () => {
    const categoria = Categoria.criar({ nome: "cama, mesa e banho" });

    const produtoValido: CriarProdutoProps = {
      nome: "Colcha",
      preco: 80,
      descricao: "Bordada",
      categoria: categoria,
    };

    expect(Produto.criar(produtoValido)).to.be.instanceof(Produto);
  });

  test(" Nâo Deve Criar um Produto com Nome inVálida - tamanho minímo", async () => {
    const categoria = Categoria.criar({ nome: "cama, mesa e banho" });

    const produtoInvalido: CriarProdutoProps = {
      nome: "ca",
      preco: 80,
      descricao: "",
      categoria,
    };

    expect(() => Produto.criar(produtoInvalido)).toThrowError(
      NomeProdutoTamanhoMinimoInvalido
    );
  });

  test(" Nâo Deve Criar um Produto com Nome inVálida - tamanho maximo", async () => {
    const categoria = Categoria.criar({ nome: "cama, mesa e banho" });

    const produtoInvalido: CriarProdutoProps = {
      nome: "jhdfjhdgljnsçaljdgnasjglflgkslfljkjkjkjkjkjkjkjkjkjkjklkjllllllllllllllllllllllllllllllllllllllllllllllllllllsssssssssssssssskkkkkkkkkk",
      preco: 0,
      descricao: "",
      categoria,
    };

    expect(() => Produto.criar(produtoInvalido)).toThrowError(
      NomeProdutoTamanhoMaximoInvalido
    );
  });
});
