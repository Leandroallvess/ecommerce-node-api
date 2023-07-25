import { Categoria } from "./modules/catalogo/domain/categoria/categoria.entity";
import { CategoriaMap } from "./modules/catalogo/mappers/categoria.map";
import { Produto } from "./modules/catalogo/domain/produto/produto.entity";
import { DomainException } from "./shered/domain/DomainException";
import { writeFile, readFile } from "fs";

try {
  /////////////////////////
  //Criando uma Categoria//
  /////////////////////////

  let categoria: Categoria;
  categoria = Categoria.criar({ nome: "cama" });
  console.log(categoria);

  /////////////////////////////
  //Recuperando uma Categoria//
  /////////////////////////////

  let propsCategoria = {
    id: "5fac700e-2783-4682-99cf-0c9c1d9675b0",
    nome: "mesa",
  };
  let categoria2: Categoria = Categoria.recuperar(propsCategoria);
  console.log(categoria2);
  console.log(categoria.equals(categoria2));

  //////////////////////////////////////////////////////
  //Persistinto e Recuperando em Arquivo - File System//
  //////////////////////////////////////////////////////

  let arrayCategorias = [];
  arrayCategorias.push(categoria.toDIO());
  arrayCategorias.push(categoria2.toDIO());

  writeFile(
    "categorias.json",
    JSON.stringify(arrayCategorias),
    function (error: any) {
      if (error) throw error;
      console.log("Arquivo Salvo com Sucesso!");
      readFile("categorias.json", (err, dadoGravadoArquivo) => {
        if (error) throw error;
        console.log("Leitura de Arquivo");
        let categoriasSalvas: [] = JSON.parse(dadoGravadoArquivo.toString());
        categoriasSalvas.forEach((categoriaJSON) => {
          console.log(categoriaJSON);
          console.log(CategoriaMap.toDomain(categoriaJSON));
        });
      });
    }
  );
} catch (error: any) {
  if (error instanceof DomainException) {
    console.log("Exceção de Domínio---------------------");
    console.log(error.message);
  } else {
    console.log("Outras Exceções ----------------------");
    console.log(error.message);
  }
} finally {
  console.log(
    "Ação que deve ser executada em caso de sucesso e em caso de exceção"
  );
}

try {
  /////////////////////////
  //Criando um Produto//
  /////////////////////////

  let categoria = Categoria.criar({ nome: "cama, mesa e banho" });

  let produto: Produto;
  produto = Produto.criar({
    nome: "colcha",
    preco: 80,
    descricao: "",
    categoria,
  });
  console.log(produto);

  //////////////////////////////////////////////////////
  //Persistinto e Recuperando em Arquivo - File System//
  //////////////////////////////////////////////////////

  let arrayProduto = [];
  arrayProduto.push(produto);

  writeFile(
    "produto.json",
    JSON.stringify(arrayProduto),
    function (error: any) {
      if (error) throw error;
      console.log("Arquivo Salvo com Sucesso!");
      readFile("produto.json", (err, dadoGravadoArquivo) => {
        if (error) throw error;
        console.log("Leitura de Arquivo");
        let produtoSalvo: [] = JSON.parse(dadoGravadoArquivo.toString());
        produtoSalvo.forEach((produtoJSON) => {
          console.log(produtoJSON);
        });
      });
    }
  );
} catch (error: any) {
  if (error instanceof DomainException) {
    console.log("Exceção de Domínio---------------------");
    console.log(error.message);
  } else {
    console.log("Outras Exceções ----------------------");
    console.log(error.message);
  }
} finally {
  console.log(
    "Ação que deve ser executada em caso de sucesso e em caso de exceção"
  );
}
