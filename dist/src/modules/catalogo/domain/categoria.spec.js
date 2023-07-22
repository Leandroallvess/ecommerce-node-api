"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const categoria_entity_1 = require("./categoria.entity");
const categoria_exception_1 = require("./categoria.exception");
(0, vitest_1.describe)('Entidade de Dominio da Categoria', () => {
    (0, vitest_1.test)('Deve Criar uma Categoria Válida', async () => {
        const categoriaValida = {
            nome: 'cama'
        };
        (0, vitest_1.expect)(categoria_entity_1.Categoria.criar(categoriaValida))
            .to.be.instanceof(categoria_entity_1.Categoria);
    });
    (0, vitest_1.test)(' Nâo Deve Criar uma Categoria com Nome inVálida - tamanho minímo', async () => {
        const categoriainValida = {
            nome: 'ca'
        };
        (0, vitest_1.expect)(() => categoria_entity_1.Categoria.criar(categoriainValida))
            .toThrowError(categoria_exception_1.NomeCategoriaTamanhoMinimoInvalido);
    });
    (0, vitest_1.test)(' Nâo Deve Criar uma Categoria com Nome inVálida - tamanho maximo', async () => {
        const categoriainValida = {
            nome: 'jhdfjhdgljnsçaljdgnasjglflgkslfljkjkjkjkjkjkjkjkjkjkjklkjllllllllllllllllllllllllllllllllllllllllllllllllllllsssssssssssssssskkkkkkkkkk'
        };
        (0, vitest_1.expect)(() => categoria_entity_1.Categoria.criar(categoriainValida))
            .toThrowError(categoria_exception_1.NomeCategoriaTamanhoMaximoInvalido);
    });
});
//# sourceMappingURL=categoria.spec.js.map