
import { Produtos } from '../models/Produtos.js'

/*
const btnAdicionarProduto = document.getElementById('btnAdicionarProduto')
const ul = document.querySelector('.lista-produtos')
*/
// btnAdicionarProduto.addEventListener('click', function(){
//   Modals.modalCadastroProduto()
// })


const inputPesquisarProduto = document.querySelector('.input-campo')
inputPesquisarProduto.addEventListener('keyup', function(event){
  pesquisaInstantanea(event.target.value)
})

function pesquisaInstantanea(palavraPesquisada){
  const containerProdutos = document.querySelector('.container-cards')
  containerProdutos.innerHTML = ''
  let produtoFiltrado = Produtos.DataBase.filter(produto => produto.nome.toLowerCase().includes(palavraPesquisada.toLowerCase()) || produto.categoria.toLowerCase().includes(palavraPesquisada.toLowerCase()))
  console.log(produtoFiltrado)
  Produtos.mostrarProdutos(produtoFiltrado)
}
