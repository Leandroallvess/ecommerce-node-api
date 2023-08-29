"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QtdMaximaCategoriasProdutoInvalida = exports.QtdMinimaCategoriasProdutoInvalida = exports.ValorMinimoProdutoInvalido = exports.DescricaoProdutoTamanhoMaximoInvalido = exports.DescricaoProdutoTamanhoMinimoInvalido = exports.NomeProdutoTamanhoMaximoInvalido = exports.NomeProdutoTamanhoMinimoInvalido = exports.ProdutoException = void 0;
const DomainException_1 = require("shared/domain/DomainException");
class ProdutoException extends DomainException_1.DomainException {
    constructor(message = "⚠️ Exceção de Domínio Genérica da Entidade Produto") {
        super(message);
        this.name = "ProdutoException";
        this.message = message;
    }
}
exports.ProdutoException = ProdutoException;
class NomeProdutoTamanhoMinimoInvalido extends ProdutoException {
    constructor(message = "⚠️ O nome do produto não possui um tamanho mínimo válido.") {
        super(message);
        this.name = "NomeProdutoTamanhoMinimoInvalido";
        this.message = message;
    }
}
exports.NomeProdutoTamanhoMinimoInvalido = NomeProdutoTamanhoMinimoInvalido;
class NomeProdutoTamanhoMaximoInvalido extends ProdutoException {
    constructor(message = "⚠️ O nome do produto não possui um tamanho máximo válido.") {
        super(message);
        this.name = "NomeProdutoTamanhoMaximoInvalido";
        this.message = message;
    }
}
exports.NomeProdutoTamanhoMaximoInvalido = NomeProdutoTamanhoMaximoInvalido;
class DescricaoProdutoTamanhoMinimoInvalido extends ProdutoException {
    constructor(message = "⚠️ A descrição do produto não possui um tamanho mínimo válido.") {
        super(message);
        this.name = "DescricaoProdutoTamanhoMinimoInvalido";
        this.message = message;
    }
}
exports.DescricaoProdutoTamanhoMinimoInvalido = DescricaoProdutoTamanhoMinimoInvalido;
class DescricaoProdutoTamanhoMaximoInvalido extends ProdutoException {
    constructor(message = "⚠️ A descrição do produto não possui um tamanho máximo válido.") {
        super(message);
        this.name = "DescricaoProdutoTamanhoMaximoInvalido";
        this.message = message;
    }
}
exports.DescricaoProdutoTamanhoMaximoInvalido = DescricaoProdutoTamanhoMaximoInvalido;
class ValorMinimoProdutoInvalido extends ProdutoException {
    constructor(message = "⚠️ O valor mínimo do produto é inválido.") {
        super(message);
        this.name = "ValorMinimoProdutoInvalido";
        this.message = message;
    }
}
exports.ValorMinimoProdutoInvalido = ValorMinimoProdutoInvalido;
class QtdMinimaCategoriasProdutoInvalida extends ProdutoException {
    constructor(message = "⚠️ A quantidade mínima de categorias produto é inválida.") {
        super(message);
        this.name = "QtdMinimaCategoriasProdutoInvalida";
        this.message = message;
    }
}
exports.QtdMinimaCategoriasProdutoInvalida = QtdMinimaCategoriasProdutoInvalida;
class QtdMaximaCategoriasProdutoInvalida extends ProdutoException {
    constructor(message = "⚠️ A quantidade mínima de categorias do produto é inválida.") {
        super(message);
        this.name = "QtdMinimaCategoriasProdutoInvalida";
        this.message = message;
    }
}
exports.QtdMaximaCategoriasProdutoInvalida = QtdMaximaCategoriasProdutoInvalida;
//# sourceMappingURL=produto.exception.js.map