import { ProdutosCriados } from "../models/PrivadoUser.js"

import { Modals } from "./dom.js"

const btnAdicionarProduto = document.getElementById('btnAdicionarProduto')
const ul = document.querySelector('.lista-produtos')

ul.addEventListener('click', function(event){
  const clicouExcluir = event.target.id
  const productId = event.target.closest('li').productId

  if(clicouExcluir === 'excluir'){
    Modals.modalExcluirProduto(productId)
  }
})

btnAdicionarProduto.addEventListener('click', function(){
  Modals.modalCadastroProduto()
})


const inputPesquisarProduto = document.querySelector('.input-campo')
inputPesquisarProduto.addEventListener("keyup", function (event) {
  pesquisaInstantanea(event.target.value)
})


function pesquisaInstantanea(palavraPesquisada) {
  const containerProdutos = document.querySelector('.container-cards')
  containerProdutos.innerHTML = ''
  let produtoFiltrado = Produtos.DataBase.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(palavraPesquisada.toLowerCase()) ||
      produto.categoria.toLowerCase().includes(palavraPesquisada.toLowerCase())
  )

  Produtos.mostrarProdutos(produtoFiltrado)

const inputPesquisarProduto = document.querySelector('#input-pesquisar')
inputPesquisarProduto.addEventListener("keyup", function(event) {
pesquisaInstantanea(event.target.value)
 })


function pesquisaInstantanea(palavraPesquisada) {
  const containerProdutos = document.querySelector('.container-cards')
  containerProdutos.innerHTML = ''
  let produtoFiltrado = Produtos.DataBase.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(palavraPesquisada.toLowerCase()) ||
      produto.categoria.toLowerCase().includes(palavraPesquisada.toLowerCase())
  )


   ProdutosCriados.metodoGet(produtoFiltrado)



const botoesCategorias = document.querySelectorAll('li')

botoesCategorias.forEach((botao) => {
  botao.addEventListener('click', function (event) {
    const valorBotao = event.target.outerText
    filtrarPorCategoria(valorBotao)
  })
})

function filtrarPorCategoria(categoria) {
  const produtos = ProdutosCriados.DataBase
  let produtosFiltrados
  const containerProdutos = document.querySelector('.lista-produtos')

  if (categoria == 'Todos' || categoria == 'todos') {
    containerProdutos.innerHTML = ''
    ProdutosCriados.metodoGet(produtos)
  }

  if (categoria == 'Panificadora' || categoria == 'panificadora') {
    produtosFiltrados = produtos.filter((produto) => produto.categoria == 'Panificadora')
    containerProdutos.innerHTML = ''
    ProdutosCriados.metodoGet(produtosFiltrados)
  }

  if (categoria == 'Frutas' || categoria === 'frutas') {
    produtosFiltrados = produtos.filter((produto) => produto.categoria == 'Frutas')
    containerProdutos.innerHTML = ''
    ProdutosCriados.metodoGet(produtosFiltrados)
  }

  if (categoria == 'Bebidas' || categoria === 'bebidas' ) {
    produtosFiltrados = produtos.filter((produto) => produto.categoria == 'Bebidas')
    containerProdutos.innerHTML = ''
    ProdutosCriados.metodoGet(produtosFiltrados) 
  }
}

ul.addEventListener('click', function(event){
  const clicouEditar = event.target.id
  const productId = event.target.closest('li').productId
  
  if(clicouEditar === 'editar'){
    Modals.editarProduto(productId)
  }

})