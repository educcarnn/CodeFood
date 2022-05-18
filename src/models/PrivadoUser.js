import { Privados } from "./Api.js";

const produtosCriados = await Privados.listarProdutosGet()

produtosCriados.forEach((elem) => {
    console.log(elem)
})