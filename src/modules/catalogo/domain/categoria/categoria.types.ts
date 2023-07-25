//Todos os atributos/propriedades que uma categoria deve ter no sistema

interface ICategoria {
  id?: string;
  nome: string;
}

type CriarCategoriaProps = Omit<ICategoria, "id">;

type RecuperarCategoriaProps = Required<ICategoria>;

export { ICategoria, CriarCategoriaProps, RecuperarCategoriaProps };
