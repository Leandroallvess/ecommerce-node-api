"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const DomainException_1 = require("@shared/domain/DomainException");
const vitest_1 = require("vitest");
const categoria_entity_1 = require("./categoria.entity");
const categoria_exception_1 = require("./categoria.exception");
let nomeCategoriaValido;
let nomeCategoriaTamanhoMinimoInvalido;
let nomeCategoriaTamanhoMaximoInvalido;
let UUIDValido;
let UUIDInvalido;
(0, vitest_1.beforeAll)(async () => {
    //Preencendo as variáveis com dados em conformidade com as restrições da regra de negócio
    nomeCategoriaValido = faker_1.faker.string.alpha({ length: { min: 3, max: 50 } });
    nomeCategoriaTamanhoMinimoInvalido = faker_1.faker.string.alpha({
        length: { min: 0, max: 2 },
    });
    nomeCategoriaTamanhoMaximoInvalido = faker_1.faker.string.alpha({
        length: { min: 51, max: 51 },
    });
    UUIDValido = faker_1.faker.string.uuid(); // Retorna um UUID v4
    UUIDInvalido = faker_1.faker.string.alpha({ length: { min: 1, max: 20 } });
});
(0, vitest_1.describe)("Entidade de Dominio da Categoria", () => {
    (0, vitest_1.test)("Deve Criar uma Categoria Válida", async () => {
        const categoriaValida = {
            nome: nomeCategoriaValido,
        };
        (0, vitest_1.expect)(categoria_entity_1.Categoria.criar(categoriaValida)).to.be.instanceof(categoria_entity_1.Categoria);
    });
    (0, vitest_1.test)(" Nâo Deve Criar uma Categoria com Nome inVálida - tamanho minímo", async () => {
        const categoriainValida = {
            nome: nomeCategoriaTamanhoMinimoInvalido,
        };
        (0, vitest_1.expect)(() => categoria_entity_1.Categoria.criar(categoriainValida)).toThrowError(categoria_exception_1.NomeCategoriaTamanhoMinimoInvalido);
    });
    (0, vitest_1.test)(" Nâo Deve Criar uma Categoria com Nome inVálida - tamanho maximo", async () => {
        const categoriainValida = {
            nome: nomeCategoriaTamanhoMaximoInvalido,
        };
        (0, vitest_1.expect)(() => categoria_entity_1.Categoria.criar(categoriainValida)).toThrowError(categoria_exception_1.NomeCategoriaTamanhoMaximoInvalido);
    });
});
(0, vitest_1.describe)("Entidade de Domínio: Categoria (Recuperar)", () => {
    (0, vitest_1.test)("Deve Recuperar Uma Categoria Válida", async () => {
        //Dado (Given)
        const categoriaValida = {
            id: UUIDValido,
            nome: nomeCategoriaValido,
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(categoria_entity_1.Categoria.recuperar(categoriaValida)).to.be.instanceof(categoria_entity_1.Categoria);
    });
    (0, vitest_1.test)("Não Deve Recuperar Categoria Com ID Inválido (UUID Inválido)", async () => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaIdInvalido = {
            id: UUIDInvalido,
            nome: nomeCategoriaValido,
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => categoria_entity_1.Categoria.recuperar(categoriaIdInvalido)).toThrowError(DomainException_1.IDEntityUUIDInvalid);
    });
    (0, vitest_1.test)("Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Mínimo)", async () => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalido = {
            id: UUIDValido,
            nome: nomeCategoriaTamanhoMinimoInvalido,
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => categoria_entity_1.Categoria.recuperar(categoriaNomeInvalido)).toThrowError(categoria_exception_1.NomeCategoriaTamanhoMinimoInvalido);
    });
    (0, vitest_1.test)("Não Deve Recuperar Categoria Com Nome Inválido (Tamanho Máximo)", async () => {
        //Dado (Given)
        //Nome maior que 50 caracteres
        const categoriaNomeInvalido = {
            id: UUIDValido,
            nome: nomeCategoriaTamanhoMaximoInvalido,
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => categoria_entity_1.Categoria.recuperar(categoriaNomeInvalido)).toThrowError(categoria_exception_1.NomeCategoriaTamanhoMaximoInvalido);
    });
});
//# sourceMappingURL=categoria.spec.js.map