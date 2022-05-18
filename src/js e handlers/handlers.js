
import { Modals } from './dom.js'

const btnAdicionarProduto = document.getElementById('btnAdicionarProduto')
const secaoPrincipal = document.getElementById('secaoPrincipal')

btnAdicionarProduto.addEventListener('click', function(){
  Modals.modalCadastroProduto()
})

secaoPrincipal.addEventListener('click', function(event){
  const clicouExcluir = event.target.id

  if(clicouExcluir === 'excluir'){
    Modals.modalExcluirProduto()
  }
})


