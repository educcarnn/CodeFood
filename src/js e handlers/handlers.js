<<<<<<< HEAD
//HANDLER DA PAGINA PRINCIPAL DO USUARIO NÃO LOGADO

=======

import { ListarProdutos } from '../models/Api.js'
>>>>>>> e1e656313cf584e8397b27e703f016336469ecba
import { Modals } from './dom.js'
import { Produtos } from '../models/Produtos.js'


const btnLogar = document.querySelector('.btnLoginHome')

<<<<<<< HEAD
btnLogar.addEventListener('click', function(event){
  const clicouLogin = event.target.classList
  console.log(clicouLogin[0] === 'btnLoginHome')

  if(clicouLogin[0] === 'btnLoginHome'){
    Modals.modalLogin()
  }
})

=======
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
>>>>>>> e1e656313cf584e8397b27e703f016336469ecba



