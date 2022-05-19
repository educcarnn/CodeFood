import { Modals } from "./dom.js"
import { Produtos } from "../models/Produtos.js"

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
}

const botoesCategorias = document.querySelectorAll('li')

botoesCategorias.forEach((botao) => {
  botao.addEventListener('click', function (event) {
    const valorBotao = event.target.outerText
    filtrarPorCategoria(valorBotao)
  })
})

function filtrarPorCategoria(categoria) {
  const produtos = Produtos.DataBase
  let produtosFiltrados
  const containerProdutos = document.getElementById('.lista-produtos')

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