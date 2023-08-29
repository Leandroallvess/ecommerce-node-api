"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const vitest_1 = require("vitest");
const categoria_entity_1 = require("../categoria/categoria.entity");
const produto_entity_1 = require("./produto.entity");
const produto_exception_1 = require("./produto.exception");
let nomeProdutoValido;
let nomeProdutoTamanhoMinInvalido;
let nomeProdutoTamanhoMaxInvalido;
let descricaoProdutoValido;
let descricaoProdutoTamanhoMinInvalido;
let descricaoProdutoTamanhoMaxInvalido;
let valorProdutoValido;
let valorMinProdutoInvalido;
let categoriasValidas;
let categoriasQtdMinInvalidas;
let categoriasQtdMaxInvalidas;
//Chamado uma vez antes de iniciar a execução de todos os testes no contexto atual.
(0, vitest_1.beforeAll)(async () => {
    //Preencendo as variáveis com dados em conformidade com as restrições da regra de negócio para o nome do produto
    nomeProdutoValido = faker_1.faker.string.alpha({ length: { min: 5, max: 50 } });
    nomeProdutoTamanhoMinInvalido = faker_1.faker.string.alpha({
        length: { min: 0, max: 4 },
    });
    nomeProdutoTamanhoMaxInvalido = faker_1.faker.string.alpha({
        length: { min: 51, max: 51 },
    });
    //Preencendo as variáveis com dados em conformidade com as restrições da regra de negócio para a descrição do produto
    descricaoProdutoValido = faker_1.faker.string.alpha({
        length: { min: 10, max: 200 },
    });
    descricaoProdutoTamanhoMinInvalido = faker_1.faker.string.alpha({
        length: { min: 0, max: 9 },
    });
    descricaoProdutoTamanhoMaxInvalido = faker_1.faker.string.alpha({
        length: { min: 201, max: 201 },
    });
    //Preencendo as variáveis com dados em conformidade com as restrições da regra de negócio para o valor do produto
    valorProdutoValido = faker_1.faker.number.int({ min: 1, max: 2000 });
    valorMinProdutoInvalido = faker_1.faker.number.int({ min: -10, max: 0 });
    //Preencendo um array de categorias válido com dados simulados
    const categoriaValida01 = categoria_entity_1.Categoria.criar({
        nome: faker_1.faker.string.alpha({ length: { min: 3, max: 50 } }),
    });
    const categoriaValida02 = categoria_entity_1.Categoria.criar({
        nome: faker_1.faker.string.alpha({ length: { min: 3, max: 50 } }),
    });
    const categoriaValida03 = categoria_entity_1.Categoria.criar({
        nome: faker_1.faker.string.alpha({ length: { min: 3, max: 50 } }),
    });
    const categoriaValida04 = categoria_entity_1.Categoria.criar({
        nome: faker_1.faker.string.alpha({ length: { min: 3, max: 50 } }),
    });
    categoriasValidas = faker_1.faker.helpers.arrayElements([categoriaValida01, categoriaValida02, categoriaValida03], { min: 1, max: 3 });
    categoriasQtdMinInvalidas = [];
    categoriasQtdMaxInvalidas = faker_1.faker.helpers.arrayElements([
        categoriaValida01,
        categoriaValida02,
        categoriaValida03,
        categoriaValida04,
    ], { min: 4, max: 4 });
});
//Suite de Testes de Unidade - Entidade de Domínio
//Usando o 'describe', você pode definir como um conjunto de testes ou benchmarks relacionados
(0, vitest_1.describe)("Entidade de Domínio: Criar Produto", () => {
    //Teste define um conjunto de expectativas relacionadas.
    (0, vitest_1.test)("Deve Criar Um Produto Válido", async () => {
        //Dado (Given)
        const produtoValido = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasValidas,
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(produto_entity_1.Produto.criar(produtoValido)).to.be.instanceof(produto_entity_1.Produto);
    });
    //Teste define um conjunto de expectativas relacionadas.
    (0, vitest_1.test)("Não Deve Criar Produto Com Nome Inválido (Tamanho Mínimo)", async () => {
        //Dado (Given)
        //Nome menor que cinco caracteres
        const produtoNomeInvalido = {
            nome: nomeProdutoTamanhoMinInvalido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasValidas,
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido)).toThrowError(produto_exception_1.NomeProdutoTamanhoMinimoInvalido);
    });
    //Teste define um conjunto de expectativas relacionadas.
    (0, vitest_1.test)("Não Deve Criar Produto Com Nome Inválido (Tamanho Máximo)", async () => {
        //Dado (Given)
        //Nome maior que cinquenta caracteres
        const produtoNomeInvalido = {
            nome: nomeProdutoTamanhoMaxInvalido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasValidas,
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido)).toThrowError(produto_exception_1.NomeProdutoTamanhoMaximoInvalido);
    });
    //Teste define um conjunto de expectativas relacionadas.
    (0, vitest_1.test)("Não Deve Criar Produto Com Descrição Inválida (Tamanho Mínimo)", async () => {
        //Dado (Given)
        //Descrição menor que dez caracteres
        const produtoNomeInvalido = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoTamanhoMinInvalido,
            valor: valorProdutoValido,
            categorias: categoriasValidas,
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido)).toThrowError(produto_exception_1.DescricaoProdutoTamanhoMinimoInvalido);
    });
    //Teste define um conjunto de expectativas relacionadas.
    (0, vitest_1.test)("Não Deve Criar Produto Com Descrição Inválida (Tamanho Máximo)", async () => {
        //Dado (Given)
        //Descrição maior que duzentos caracteres
        const produtoNomeInvalido = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoTamanhoMaxInvalido,
            valor: valorProdutoValido,
            categorias: categoriasValidas,
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido)).toThrowError(produto_exception_1.DescricaoProdutoTamanhoMaximoInvalido);
    });
    //Teste define um conjunto de expectativas relacionadas.
    (0, vitest_1.test)("Não Deve Criar Produto Com Valor Mínimo Inválido", async () => {
        //Dado (Given)
        //Valor mínimo menor que 0
        const produtoNomeInvalido = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorMinProdutoInvalido,
            categorias: categoriasValidas,
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido)).toThrowError(produto_exception_1.ValorMinimoProdutoInvalido);
    });
    //Teste define um conjunto de expectativas relacionadas.
    (0, vitest_1.test)("Não Deve Criar Produto Com Número Mínimo de Categorias Inválido", async () => {
        //Dado (Given)
        //Nenhuma categoria é atribuida - menor que 1
        const produtoNomeInvalido = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasQtdMinInvalidas,
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido)).toThrowError(produto_exception_1.QtdMinimaCategoriasProdutoInvalida);
    });
    //Teste define um conjunto de expectativas relacionadas.
    (0, vitest_1.test)("Não Deve Criar Produto Com Número Máximo de Categorias Inválido", async () => {
        //Dado (Given)
        //4 categorias é atribuidas - maior que 3
        const produtoNomeInvalido = {
            nome: nomeProdutoValido,
            descricao: descricaoProdutoValido,
            valor: valorProdutoValido,
            categorias: categoriasQtdMaxInvalidas,
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido)).toThrowError(produto_exception_1.QtdMaximaCategoriasProdutoInvalida);
    });
});
//# sourceMappingURL=produto.spec.js.map