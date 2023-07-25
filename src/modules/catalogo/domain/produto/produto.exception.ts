import { DomainException } from "../../../../shered/domain/DomainException";

class ProdutoException extends DomainException {
  public constructor(
    message: string = "⚠️ Exceção de Domínio Genérica da Entidade Produto"
  ) {
    super(message);
    this.name = "ProduroException";
    this.message = message;
  }
}

class NomeProdutoNuloOuIndefinido extends ProdutoException {
  public constructor(
    message: string = "⚠️ O nome da produto é nulo ou indefinido."
  ) {
    super(message);
    this.name = "NomeProdutoNuloOuIndefinido";
    this.message = message;
  }
}

class NomeProdutoTamanhoMinimoInvalido extends ProdutoException {
  public constructor(
    message: string = "⚠️ O nome da produto não possui um tamanho mínimo válido."
  ) {
    super(message);
    this.name = "NomeProdutoTamanhoMinimoInvalido";
    this.message = message;
  }
}

class NomeProdutoTamanhoMaximoInvalido extends ProdutoException {
  public constructor(
    message: string = "⚠️ O nome da produto não possui um tamanho máximo válido."
  ) {
    super(message);
    this.name = "NomeProdutoTamanhoMaximoInvalido";
    this.message = message;
  }
}

class CategoriaInvalida extends ProdutoException {
  public constructor(message: string = "Categoria do Produto Invalida") {
    super(message);
    this.name = "CategoriaInvalida";
    this.message = message;
  }
}

class PrecoInvalido extends ProdutoException {
  public constructor(message: string = "Preço inválido") {
    super(message);
    this.name = "PrecoInvalido";
    this.message = message;
  }
}

export {
  ProdutoException,
  NomeProdutoNuloOuIndefinido,
  NomeProdutoTamanhoMinimoInvalido,
  NomeProdutoTamanhoMaximoInvalido,
  CategoriaInvalida,
  PrecoInvalido,
};
