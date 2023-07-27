import { describe, test, expect } from "vitest";
import { CriarProdutoProps } from "../produto/produto.types";
import { Categoria } from "../categoria/categoria.entity";
import {
  NomeProdutoTamanhoMaximoInvalido,
  NomeProdutoTamanhoMinimoInvalido,
  NumeroCategoriaInvalido,
  PrecoInvalido,
  NomeDescricaoTamanhoMaximoInvalido,
  NomeDescricaoTamanhoMinimoInvalido,
} from "./produto.exception";
import { Produto } from "./produto.entity";

describe("Entidade de Dominio da Produto", () => {
  test("Deve Criar um Produto Válido", async () => {
    const categoria = Categoria.criar({ nome: "cama, mesa e banho" });

    const produtoValido: CriarProdutoProps = {
      nome: "Colcha",
      preco: 80,
      descricao: "Bordada para cama box",
      categoria: [categoria],
    };

    expect(Produto.criar(produtoValido)).to.be.instanceof(Produto);
  });

  // nome produto tamanho minimo < 5
  test(" Nâo Deve Criar um Produto com Nome inVálida - tamanho minímo", async () => {
    const categoria = Categoria.criar({ nome: "cama, mesa e banho" });

    const produtoInvalido: CriarProdutoProps = {
      nome: "ca",
      preco: 80,
      descricao: "lençol de cama box ",
      categoria: [categoria],
    };

    expect(() => Produto.criar(produtoInvalido)).toThrowError(
      NomeProdutoTamanhoMinimoInvalido
    );
  });

  // nome produto tamanho maxímo > 50
  test(" Nâo Deve Criar um Produto com Nome inVálida - tamanho maximo", async () => {
    const categoria = Categoria.criar({ nome: "cama, mesa e banho" });

    const produtoInvalido: CriarProdutoProps = {
      nome: "jhdfjhdgljnsçaljdgnasjglflgkslfljkjkjkjkjkjkjkjkjkjkjklkjllllllllllllllllllllllllllllllllllllllllllllllllllllsssssssssssssssskkkkkkkkkk",
      preco: 0,
      descricao: "lençol de cama box",
      categoria: [categoria],
    };

    expect(() => Produto.criar(produtoInvalido)).toThrowError(
      NomeProdutoTamanhoMaximoInvalido
    );
  });

  //categoria invalida < 1
  test("Não deve criar categoria invalida - tamanho minimo", async () => {
    const categoria = Categoria.criar({ nome: "cama, mesa e banho" });

    const produtoInvalido: CriarProdutoProps = {
      nome: "lençol",
      preco: 80,
      descricao: "lençol de cama box",
      categoria: [],
    };

    expect(() => Produto.criar(produtoInvalido)).toThrowError(
      NumeroCategoriaInvalido
    );
  });

  //categoria invalida > 3
  test("Não deve criar categoria invalida - tamanho maximo", async () => {
    const capa = Categoria.criar({ nome: "cama, mesa e banho" });
    const lencol = Categoria.criar({ nome: "cama, mesa e banho" });
    const Colcha = Categoria.criar({ nome: "cama, mesa e banho" });
    const almofada = Categoria.criar({ nome: "cama, mesa e banho" });

    const produtoInvalido: CriarProdutoProps = {
      nome: "lençol",
      preco: 100,
      descricao: "lençol de cama box",
      categoria: [capa, lencol, Colcha, almofada],
    };

    expect(() => Produto.criar(produtoInvalido)).toThrowError(
      NumeroCategoriaInvalido
    );
  });

  //Descrição nula
  test("Não deve criar descrição nula", async () => {
    const capa = Categoria.criar({ nome: "cama, mesa e banho" });

    const produtoInvalido: CriarProdutoProps = {
      nome: "lençol",
      preco: 100,
      descricao: "",
      categoria: [capa],
    };

    expect(() => Produto.criar(produtoInvalido)).toThrowError(
      NomeDescricaoTamanhoMinimoInvalido
    );
  });

  //descrição maior quer 50
  test("Não deve criar descrição maior quer 50", async () => {
    const capa = Categoria.criar({ nome: "cama, mesa e banho" });

    const produtoInvalido: CriarProdutoProps = {
      nome: "lençol",
      preco: 100,
      descricao:
        " coma mesa banho, coma mesa banho, coma mesa banho, coma mesa banho, coma mesa banho, coma mesa banho,jhghf, hygtrdes vteses frs3a2a f5d3ss2 f4s3s2 fde3w s3s23 d3s32w,rdes2 ,gtrfed3, d4s3, tfrdes ,gfd3d3s,rese, rfrdes,tfrde, uhyg6",
      categoria: [capa],
    };

    expect(() => Produto.criar(produtoInvalido)).toThrowError(
      NomeDescricaoTamanhoMaximoInvalido
    );
  });

  //descrição menor que 10
  test("Não deve criar descrição menor que 10", async () => {
    const capa = Categoria.criar({ nome: "cama, mesa e banho" });

    const produtoInvalido: CriarProdutoProps = {
      nome: "lençol",
      preco: 100,
      descricao: "qwertyuio",
      categoria: [capa],
    };

    expect(() => Produto.criar(produtoInvalido)).toThrowError(
      NomeDescricaoTamanhoMinimoInvalido
    );
  });

  //valor
  test("valor não deve ser menor que zero", async () => {
    const capa = Categoria.criar({ nome: "cama, mesa e banho" });

    const produtoInvalido: CriarProdutoProps = {
      nome: "lençol bordado",
      preco: -8,
      descricao: " LençoldeCamaBox",
      categoria: [capa],
    };
  });
});
