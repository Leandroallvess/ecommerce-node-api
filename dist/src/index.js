"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoria_entity_1 = require("@modules/catalogo/domain/categoria/categoria.entity");
const categoria_map_1 = require("@modules/catalogo/mappers/categoria.map");
const DomainException_1 = require("shared/domain/DomainException");
const fs_1 = require("fs");
try {
    ///////////////////
    //Criar Categoria//
    ///////////////////
    let categoria;
    categoria = categoria_entity_1.Categoria.criar({ nome: "mesa" });
    console.log(categoria);
    ///////////////////////
    //Recuperar Categoria//
    ///////////////////////
    let propsCategoria = {
        id: "6ad12850-abe4-49fe-967e-ab915cce9b3a",
        nome: "cama",
    };
    let categoria2 = categoria_entity_1.Categoria.recuperar(propsCategoria);
    console.log(categoria2);
    //////////////////////////////////////////////////////
    //Persistinto e Recuperando em Arquivo - File System//
    //////////////////////////////////////////////////////
    let arrayCategorias = [];
    arrayCategorias.push(categoria.toDTO());
    arrayCategorias.push(categoria2.toDTO());
    (0, fs_1.writeFile)("categorias.json", JSON.stringify(arrayCategorias), function (error) {
        if (error)
            throw error;
        console.log("Arquivo Salvo com Sucesso!");
        (0, fs_1.readFile)("categorias.json", (error, dadoGravadoArquivo) => {
            if (error)
                throw error;
            console.log("Leitura de Arquivo!");
            let categoriasSalvas = JSON.parse(dadoGravadoArquivo.toString());
            categoriasSalvas.forEach((categoriaJSON) => {
                console.log(categoriaJSON);
                console.log(categoria_map_1.CategoriaMap.toDomain(categoriaJSON));
            });
        });
    });
}
catch (error) {
    if (error instanceof DomainException_1.DomainException) {
        console.log("Execeção de Dóminio");
        console.log(error.message);
    }
    else {
        console.log("Outras Exceções");
        console.log(error.message);
    }
}
finally {
    console.log("Ação que deve ser executada em caso de sucesso e em caso de exceção");
}
//# sourceMappingURL=index.js.map