import { describe, test, expect } from "vitest";
import {
  CriarCategoriaProps,
  RecuperarCategoriaProps,
} from "./categoria.types";
import { Categoria } from "./categoria.entity";
import {
  NomeCategoriaTamanhoMaximoInvalido,
  NomeCategoriaTamanhoMinimoInvalido,
} from "./categoria.exception";
import { IDEntityUUIDInvalid } from "../../../../shered/domain/DomainException";

describe("Entidade de Dominio da Categoria", () => {
  test("Deve Criar uma Categoria Válida", async () => {
    const categoriaValida: CriarCategoriaProps = {
      nome: "cama",
    };

    expect(Categoria.criar(categoriaValida)).to.be.instanceof(Categoria);
  });

  test(" Nâo Deve Criar uma Categoria com Nome inVálida - tamanho minímo", async () => {
    const categoriainValida: CriarCategoriaProps = {
      nome: "ca",
    };

    expect(() => Categoria.criar(categoriainValida)).toThrowError(
      NomeCategoriaTamanhoMinimoInvalido
    );
  });

  test(" Nâo Deve Criar uma Categoria com Nome inVálida - tamanho maximo", async () => {
    const categoriainValida: CriarCategoriaProps = {
      nome: "jhdfjhdgljnsçaljdgnasjglflgkslfljkjkjkjkjkjkjkjkjkjkjklkjllllllllllllllllllllllllllllllllllllllllllllllllllllsssssssssssssssskkkkkkkkkk",
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
      id: "5edbc79d-b724-4a39-a29b-0bfb2386920a",
      nome: "cama",
    };

    //Quando (When) e Então (Then)
    expect(Categoria.recuperar(categoriaValida)).to.be.instanceof(Categoria);
  });

  test("Não Deve Recuperar Categoria Com ID Inválido (UUID Inválido)", async () => {
    //Dado (Given)
    //Nome menor que três caracteres
    const categoriaIdInvalido: RecuperarCategoriaProps = {
      id: "1234",
      nome: "cama",
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
      id: "5edbc79d-b724-4a39-a29b-0bfb2386920a",
      nome: "ma",
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
      id: "5edbc79d-b724-4a39-a29b-0bfb2386920a",
      nome: "123456789123456789123456789123456789123456789123456",
    };

    //Quando (When) e Então (Then)
    expect(() => Categoria.recuperar(categoriaNomeInvalido)).toThrowError(
      NomeCategoriaTamanhoMaximoInvalido
    );
  });
});
