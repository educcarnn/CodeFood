
import { ListarProdutos } from '../models/Api.js'
import { Modals } from './dom.js'
import { Produtos } from '../models/Produtos.js'


const btnAdicionarProduto = document.getElementById('btnAdicionarProduto')

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
  Produtos.mostrarProdutos(produtoFiltrado)
}



