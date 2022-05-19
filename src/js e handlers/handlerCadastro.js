import { Modals } from "./dom.js";

const btLogin = document.querySelector('.btnCadastrar')
const btnHome = document.querySelector('.homePage')

btLogin.addEventListener('click', function(event){
  const clicouCadastrar = event.target.classList
  console.log(event)
})

btnHome.addEventListener('click', function(){
  window.location = '/index.html'
})



