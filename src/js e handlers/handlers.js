//HANDLER DA PAGINA INICIAL

import { ListarProdutos, Login } from "../models/Api.js"
import { Modals } from "./dom.js"
import { Produtos } from "../models/Produtos.js"

const btnLogar = document.querySelector(".btnLoginHome")
const secaoPrincipal = document.getElementById('secaoPrincipal')



btnLogar.addEventListener('click', async function(event){
  
  const clicouLogin = event.target.classList
  Modals.modalLogin()
  
  
})


secaoPrincipal.addEventListener('click', async function(event){
  const clicouLogar = event.target.classList

  if(clicouLogar[0] === 'btnLoginModal'){
    event.preventDefault()
    console.log('clicou')

      const form = document.querySelector('.formularioLogin')
      console.log(form)
      
      const valores = [...form]
        
          const obj = {
              email: valores[0].value,
              password: valores[1].value
          }
      
          await Login.metodoPost(obj)
  // ou
          const status = await Login.metodoPost(obj) 
          if(status.error === "password invalid" || status.error === `Email: ${valores[0].value} does not exists`) {
              localStorage.removeItem('token')
              const body = document.querySelector('.containerModal')
    
              const div = document.createElement('p')
             div.id = 'erroLogin'
             div.innerText = 'Erro em algum dado do login!'
             body.appendChild(div)
     /*CSS na home */
             setTimeout(() => {
                     div.remove()
           }, 2500);
              }
              else {
                  localStorage.setItem('token', status)
                  window.location = `/src/pages/homeAdmin.html`
              }
  
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

const inputPesquisarProduto = document.querySelector('.input-campo')
inputPesquisarProduto.addEventListener('keyup', function (event) {
  pesquisaInstantanea(event.target.value)
})

function pesquisaInstantanea(palavraPesquisada) {
  const containerProdutos = document.querySelector(".container-cards")
  containerProdutos.innerHTML = ''
  let produtoFiltrado = Produtos.DataBase.filter(
    (produto) =>
      produto.nome.toLowerCase().includes(palavraPesquisada.toLowerCase()) ||
      produto.categoria.toLowerCase().includes(palavraPesquisada.toLowerCase())
  )

  Produtos.mostrarProdutos(produtoFiltrado)
}

const botoesCategorias = document.querySelectorAll('button')

botoesCategorias.forEach((botao) => {
  botao.addEventListener('click', function (event) {
    const valorBotao = event.target.value
    console.log(valorBotao)
    filtrarPorCategoria(valorBotao)
  })
})

function filtrarPorCategoria(categoria) {
  const produtos = Produtos.DataBase
  let produtosFiltrados
  const containerProdutos = document.querySelector('.container-cards')

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
