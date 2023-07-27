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

class PrecoInvalido extends ProdutoException {
  public constructor(message: string = "Preço inválido") {
    super(message);
    this.name = "PrecoInvalido";
    this.message = message;
  }
}

class DescricaoNulo extends ProdutoException {
  public constructor(message: string = "A descrição não pode ser nula") {
    super(message);
    this.name = "DescricaoNula";
    this.message = message;
  }
}

class NomeDescricaoTamanhoMinimoInvalido extends ProdutoException {
  public constructor(
    message: string = "A descrição não tem tamanho minímo válido"
  ) {
    super(message);
    this.name = "NomeDescricaoTamanhoMinimoInvalido";
    this.message = message;
  }
}

class NomeDescricaoTamanhoMaximoInvalido extends ProdutoException {
  public constructor(
    message: string = "A descrição não tem tamanho maximo válido"
  ) {
    super(message);
    this.name = "NomeDescricaoTamanhoMaximoInvalido";
    this.message = message;
  }
}

class NumeroCategoriaInvalido extends ProdutoException {
  public constructor(
    message: string = "O numero de categoria deve conter entre uma e três"
  ) {
    super(message);
    this.name = "NumeroCategoriaInvalido";
    this.message = message;
  }
}

export {
  ProdutoException,
  NomeProdutoNuloOuIndefinido,
  NomeProdutoTamanhoMinimoInvalido,
  NomeProdutoTamanhoMaximoInvalido,
  NomeDescricaoTamanhoMinimoInvalido,
  NomeDescricaoTamanhoMaximoInvalido,
  DescricaoNulo,
  NumeroCategoriaInvalido,
  PrecoInvalido,
};
