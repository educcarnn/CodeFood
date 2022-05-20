import { Privados } from "../models/Api.js"
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

const inputPesquisarProduto = document.querySelector('#input-pesquisar')
let produtoCadastrado = await Privados.listarProdutosGet()

inputPesquisarProduto.addEventListener("keyup", function(event) {
pesquisaInstantanea(event.target.value)
 })

async function pesquisaInstantanea(palavraPesquisada) {
  const containerProdutos = document.querySelector('.lista-produtos')

  containerProdutos.innerHTML = ''
  
  console.log(produtoCadastrado)

  let produtoFiltrado = produtoCadastrado.filter(
  (produto) =>
    produto.nome.toLowerCase().includes(palavraPesquisada.toLowerCase()) ||
    produto.categoria.toLowerCase().includes(palavraPesquisada.toLowerCase())
  )

   ProdutosCriados.metodoGet(produtoFiltrado)
}

const botoesCategorias = document.querySelectorAll('li')

botoesCategorias.forEach((botao) => {
  botao.addEventListener('click', function (event) {
    const valorBotao = event.target.outerText
    filtrarPorCategoria(valorBotao)
  })
})

async function filtrarPorCategoria(categoria) {
  
  const containerProdutos = document.querySelector('.lista-produtos')

  let produtos

  if (categoria == 'Todos') {
    containerProdutos.innerHTML = ''
   await ProdutosCriados.metodoGet(produtos)
  }

  if (categoria == 'Panificadora') {
    
    produtos = produtoCadastrado.filter((produto) => produto.categoria == 'Panificadora')
    containerProdutos.innerHTML = ''
    await ProdutosCriados.metodoGet(produtos)
  }

  if (categoria == 'Frutas') {
    produtos = produtoCadastrado.filter((produto) => produto.categoria == 'Frutas')
    containerProdutos.innerHTML = ''
    await ProdutosCriados.metodoGet(produtos)
  }

  if (categoria == 'Bebidas') {
    produtos = produtoCadastrado.filter((produto) => produto.categoria == 'Bebidas')
    containerProdutos.innerHTML = ''
    await ProdutosCriados.metodoGet(produtos) 
  }
}

ul.addEventListener('click', function(event){
  const clicouEditar = event.target.id
  const productId = event.target.closest('li').productId

  if(clicouEditar === 'editar'){
    Modals.editarProduto(productId)
  }

})