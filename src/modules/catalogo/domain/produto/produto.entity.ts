import { Categoria } from "../categoria/categoria.entity";
import {
  DescricaoNulo,
  NomeDescricaoTamanhoMaximoInvalido,
  NomeDescricaoTamanhoMinimoInvalido,
  NomeProdutoNuloOuIndefinido,
  NomeProdutoTamanhoMaximoInvalido,
  NomeProdutoTamanhoMinimoInvalido,
  NumeroCategoriaInvalido,
  PrecoInvalido,
} from "./produto.exception";
import { CriarProdutoProps, IProduto } from "./produto.types";
import { Entity } from "../../../../shered/domain/entity";

class Produto extends Entity<IProduto> implements IProduto {
  toDIO(): any {
    throw new Error("Method not implemented.");
  }
  ///////////////////////
  //Atributos de Classe//
  ///////////////////////

  private _nome: string;
  private _preco: number;
  private _descricao: string;
  private _categoria: Categoria[];

  ///////////////
  //Gets e Sets//
  ///////////////

  public get nome(): string {
    return this._nome;
  }

  private set nome(value: string) {
    if (value === null || value === undefined) {
      throw new NomeProdutoNuloOuIndefinido();
    }

    if (value.trim().length < 5) {
      throw new NomeProdutoTamanhoMinimoInvalido();
    }

    if (value.trim().length > 50) {
      throw new NomeProdutoTamanhoMaximoInvalido();
    }

    this._nome = value;
  }

  public get preco(): number {
    return this._preco;
  }
  private set preco(value: number) {
    if (value < 0) {
      throw new PrecoInvalido();
    }
    this._preco = value;
  }

  public get descricao(): string {
    return this._descricao;
  }
  private set descricao(value: string) {
    if (value == null || value == undefined) {
      throw new DescricaoNulo();
    }
    if (value.length < 10) {
      throw new NomeDescricaoTamanhoMinimoInvalido();
    }
    if (value.length > 200) {
      throw new NomeDescricaoTamanhoMaximoInvalido();
    }
    this._descricao = value;
  }

  public get categoria(): Categoria[] {
    return this._categoria;
  }
  private set categoria(value: Categoria[]) {
    if (value.length < 1 || value.length > 3) {
      throw new NumeroCategoriaInvalido();
    }
    this._categoria = value;
  }

  //////////////
  //Construtor//
  //////////////

  private constructor(props: IProduto) {
    super(props.id);
    this.nome = props.nome;
    this._preco = props.preco;
    this.categoria = props.categoria;
    this.descricao = props.descricao;
  }

  /////////////////////////
  //Static Factory Method//
  /////////////////////////

  public static criar(props: CriarProdutoProps): Produto {
    let { nome, preco, categoria, descricao } = props;
    return new Produto({ nome, preco, categoria, descricao });
  }
}

export { Produto };
