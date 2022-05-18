
import { Modals } from './dom.js'

const btnAdicionarProduto = document.getElementById('btnAdicionarProduto')

btnAdicionarProduto.addEventListener('click', function(){
  Modals.modalCadastroProduto()
})

