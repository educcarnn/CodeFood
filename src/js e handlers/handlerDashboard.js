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