import { faker } from "@faker-js/faker";
import { IDEntityUUIDInvalid } from "@shared/domain/DomainException";
import { beforeAll, describe, expect, test } from "vitest";
import { Categoria } from "./categoria.entity";
import {
  NomeCategoriaTamanhoMaximoInvalido,
  NomeCategoriaTamanhoMinimoInvalido,
} from "./categoria.exception";
import {
  CriarCategoriaProps,
  RecuperarCategoriaProps,
} from "./categoria.types";

let nomeCategoriaValido: string;
let nomeCategoriaTamanhoMinimoInvalido: string;
let nomeCategoriaTamanhoMaximoInvalido: string;
let UUIDValido: string;
let UUIDInvalido: string;

beforeAll(async () => {
  //Preencendo as variáveis com dados em conformidade com as restrições da regra de negócio
  nomeCategoriaValido = faker.string.alpha({ length: { min: 3, max: 50 } });
  nomeCategoriaTamanhoMinimoInvalido = faker.string.alpha({
    length: { min: 0, max: 2 },
  });
  nomeCategoriaTamanhoMaximoInvalido = faker.string.alpha({
    length: { min: 51, max: 51 },
  });
  UUIDValido = faker.string.uuid(); // Retorna um UUID v4
  UUIDInvalido = faker.string.alpha({ length: { min: 1, max: 20 } });
});

describe("Entidade de Dominio da Categoria", () => {
  test("Deve Criar uma Categoria Válida", async () => {
    const categoriaValida: CriarCategoriaProps = {
      nome: nomeCategoriaValido,
    };

    expect(Categoria.criar(categoriaValida)).to.be.instanceof(Categoria);
  });

  test(" Nâo Deve Criar uma Categoria com Nome inVálida - tamanho minímo", async () => {
    const categoriainValida: CriarCategoriaProps = {
      nome: nomeCategoriaTamanhoMinimoInvalido,
    };

    expect(() => Categoria.criar(categoriainValida)).toThrowError(
      NomeCategoriaTamanhoMinimoInvalido
    );
  });

  test(" Nâo Deve Criar uma Categoria com Nome inVálida - tamanho maximo", async () => {
    const categoriainValida: CriarCategoriaProps = {
      nome: nomeCategoriaTamanhoMaximoInvalido,
    };

    expect(() => Categoria.criar(categoriainValida)).toThrowError(
      NomeCategoriaTamanhoMaximoInvalido
    );
  });
});

describe("Entidade de Domínio: Categoria (Recuperar)", () => {
  test("Deve Recuperar Uma Categoria Válida", async () => {
    //Dado (Given)
    const categoriaValida: RecuperarCategoriaProps = {
      id: UUIDValido,
      nome: nomeCategoriaValido,
    };

    //Quando (When) e Então (Then)
    expect(Categoria.recuperar(categoriaValida)).to.be.instanceof(Categoria);
  });

  test("Não Deve Recuperar Categoria Com ID Inválido (UUID Inválido)", async () => {
    //Dado (Given)
    //Nome menor que três caracteres
    const categoriaIdInvalido: RecuperarCategoriaProps = {
      id: UUIDInvalido,
      nome: nomeCategoriaValido,
    };

    //Quando (When) e Então (Then)
    expect(() => Categoria.recuperar(categoriaIdInvalido)).toThrowError(
      IDEntityUUIDInvalid
    );
  });

  test("Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Mínimo)", async () => {
    //Dado (Given)
    //Nome menor que três caracteres
    const categoriaNomeInvalido: RecuperarCategoriaProps = {
      id: UUIDValido,
      nome: nomeCategoriaTamanhoMinimoInvalido,
    };

    //Quando (When) e Então (Then)
    expect(() => Categoria.recuperar(categoriaNomeInvalido)).toThrowError(
      NomeCategoriaTamanhoMinimoInvalido
    );
  });

  test("Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Máximo)", async () => {
    //Dado (Given)
    //Nome maior que 50 caracteres
    const categoriaNomeInvalido: RecuperarCategoriaProps = {
      id: UUIDValido,
      nome: nomeCategoriaTamanhoMaximoInvalido,
    };

    //Quando (When) e Então (Then)
    expect(() => Categoria.recuperar(categoriaNomeInvalido)).toThrowError(
      NomeCategoriaTamanhoMaximoInvalido
    );
  });
});
