import {
  ICategoria,
  CriarCategoriaProps,
  RecuperarCategoriaProps,
} from "./categoria.types";
import {
  NomeCategoriaNuloOuIndefinido,
  NomeCategoriaTamanhoMaximoInvalido,
  NomeCategoriaTamanhoMinimoInvalido,
} from "./categoria.exception";
import { Entity } from "../../../../shered/domain/entity";
import { CategoriaMap } from "../../mappers/categoria.map";

class Categoria extends Entity<ICategoria> implements ICategoria {
  ///////////////////////
  //Atributos de Classe//
  ///////////////////////

  private _nome: string = "";

  ///////////////
  //Gets e Sets//
  ///////////////

  public get nome(): string {
    return this._nome;
  }

  private set nome(value: string) {
    if (value === null || value === undefined) {
      throw new NomeCategoriaNuloOuIndefinido();
    }

    if (value.trim().length < 3) {
      throw new NomeCategoriaTamanhoMinimoInvalido();
    }

    if (value.trim().length > 50) {
      throw new NomeCategoriaTamanhoMaximoInvalido();
    }

    this._nome = value;
  }

  //////////////
  //Construtor//
  //////////////

  private constructor(categoria: ICategoria) {
    super(categoria.id);
    this.nome = categoria.nome;
  }

  /////////////////////////
  //Static Factory Method//
  /////////////////////////

  public static criar(props: CriarCategoriaProps): Categoria {
    let { nome } = props;
    return new Categoria({ nome });
  }

  public static recuperar(props: RecuperarCategoriaProps): Categoria {
    return new Categoria(props);
  }

  public toDIO(): ICategoria {
    return CategoriaMap.toDIO(this);
  }
}

export { Categoria };