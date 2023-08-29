"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
const entity_1 = require("@shared/domain/entity");
const produto_map_1 = require("../../mappers/produto.map");
const produto_exception_1 = require("./produto.exception");
class Produto extends entity_1.Entity {
    ///////////////
    //Gets e Sets//
    ///////////////
    get nome() {
        return this._nome;
    }
    set nome(value) {
        if (value.trim().length < 5) {
            throw new produto_exception_1.NomeProdutoTamanhoMinimoInvalido();
        }
        if (value.trim().length > 50) {
            throw new produto_exception_1.NomeProdutoTamanhoMaximoInvalido();
        }
        this._nome = value;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        if (value.trim().length < 10) {
            throw new produto_exception_1.DescricaoProdutoTamanhoMinimoInvalido();
        }
        if (value.trim().length > 200) {
            throw new produto_exception_1.DescricaoProdutoTamanhoMaximoInvalido();
        }
        this._descricao = value;
    }
    get valor() {
        return this._valor;
    }
    set valor(value) {
        if (value < 0) {
            throw new produto_exception_1.ValorMinimoProdutoInvalido();
        }
        this._valor = value;
    }
    get categorias() {
        return this._categorias;
    }
    set categorias(value) {
        if (value.length < 1) {
            throw new produto_exception_1.QtdMinimaCategoriasProdutoInvalida();
        }
        if (value.length > 3) {
            throw new produto_exception_1.QtdMaximaCategoriasProdutoInvalida();
        }
        this._categorias = value;
    }
    //////////////
    //Construtor//
    //////////////
    constructor(produto) {
        super(produto.id);
        this.nome = produto.nome;
        this.descricao = produto.descricao;
        this.valor = produto.valor;
        this.categorias = produto.categorias;
    }
    /////////////////////////
    //Static Factory Method//
    /////////////////////////
    static criar(props) {
        return new Produto(props);
    }
    static recuperar(props) {
        return new Produto(props);
    }
    ///////////
    //Métodos//
    ///////////
    toDTO() {
        return produto_map_1.ProdutoMap.toDTO(this);
    }
}
exports.Produto = Produto;
//# sourceMappingURL=produto.entity.js.map