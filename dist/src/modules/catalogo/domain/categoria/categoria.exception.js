"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NomeCategoriaTamanhoMaximoInvalido = exports.NomeCategoriaTamanhoMinimoInvalido = exports.NomeCategoriaNuloOuIndefinido = exports.CategoriaException = void 0;
const DomainException_1 = require("@shared/domain/DomainException");
class CategoriaException extends DomainException_1.DomainException {
    constructor(message = "⚠️ Exceção de Domínio Genérica da Entidade Categoria") {
        super(message);
        this.name = "CategoriaException";
        this.message = message;
    }
}
exports.CategoriaException = CategoriaException;
class NomeCategoriaNuloOuIndefinido extends CategoriaException {
    constructor(message = "⚠️ O nome da categoria é nulo ou indefinido.") {
        super(message);
        this.name = "NomeCategoriaNuloOuIndefinido";
        this.message = message;
    }
}
exports.NomeCategoriaNuloOuIndefinido = NomeCategoriaNuloOuIndefinido;
class NomeCategoriaTamanhoMinimoInvalido extends CategoriaException {
    constructor(message = "⚠️ O nome da categoria não possui um tamanho mínimo válido.") {
        super(message);
        this.name = "NomeCategoriaTamanhoMinimoInvalido";
        this.message = message;
    }
}
exports.NomeCategoriaTamanhoMinimoInvalido = NomeCategoriaTamanhoMinimoInvalido;
class NomeCategoriaTamanhoMaximoInvalido extends CategoriaException {
    constructor(message = "⚠️ O nome da categoria não possui um tamanho máximo válido.") {
        super(message);
        this.name = "NomeCategoriaTamanhoMaximoInvalido";
        this.message = message;
    }
}
exports.NomeCategoriaTamanhoMaximoInvalido = NomeCategoriaTamanhoMaximoInvalido;
//# sourceMappingURL=categoria.exception.js.map