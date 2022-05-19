import { ListarProdutos } from "../models/Api.js"
import { Modals } from "./dom.js"
import { Produtos } from "../models/Produtos.js"

const btnLogar = document.querySelector(".btnLoginHome")




btnLogar.addEventListener('click', function(event){

  const clicouLogin = event.target.classList
  console.log(clicouLogin)
  console.log(clicouLogin[0] === 'btnLoginHome')

  if (clicouLogin[0] === "btnLoginHome") {
    Modals.modalLogin()
  }
})

/*
const btnAdicionarProduto = document.getElementById('btnAdicionarProduto')
const ul = document.querySelector('.lista-produtos')
*/
// btnAdicionarProduto.addEventListener('click', function(){
//   Modals.modalCadastroProduto()
// })

// btnAdicionarProduto.addEventListener('click', function(){
//   Modals.modalCadastroProduto()
// })

const inputPesquisarProduto = document.querySelector(".input-campo")
inputPesquisarProduto.addEventListener("keyup", function (event) {
  pesquisaInstantanea(event.target.value)
})

function pesquisaInstantanea(palavraPesquisada) {
  const containerProdutos = document.querySelector(".container-cards")
  containerProdutos.innerHTML = ""
  let produtoFiltrado = Produtos.DataBase.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(palavraPesquisada.toLowerCase()) ||
      produto.categoria.toLowerCase().includes(palavraPesquisada.toLowerCase())
  )

  Produtos.mostrarProdutos(produtoFiltrado)
}

const botoesCategorias = document.querySelectorAll("button")

botoesCategorias.forEach((botao) => {
  botao.addEventListener("click", function (event) {
    const valorBotao = event.target.value
    filtrarPorCategoria(valorBotao)
  })
})

function filtrarPorCategoria(categoria) {
  const produtos = Produtos.DataBase
  let produtosFiltrados
  const containerProdutos = document.querySelector(".container-cards")

  if (categoria == 'todos') {
    containerProdutos.innerHTML = ''
    Produtos.mostrarProdutos(produtos)
  }

  if (categoria == 'panificadora') {
    produtosFiltrados = produtos.filter((produto) => produto.categoria == 'Panificadora')
    containerProdutos.innerHTML = ''
    Produtos.mostrarProdutos(produtosFiltrados)
  }

  if (categoria == 'frutas') {
    produtosFiltrados = produtos.filter((produto) => produto.categoria == 'Frutas')
    containerProdutos.innerHTML = ''
    Produtos.mostrarProdutos(produtosFiltrados)
  }

  if (categoria == 'bebidas') {
    produtosFiltrados = produtos.filter((produto) => produto.categoria == 'Bebidas')
    containerProdutos.innerHTML = ''
    Produtos.mostrarProdutos(produtosFiltrados) 
  }
}
