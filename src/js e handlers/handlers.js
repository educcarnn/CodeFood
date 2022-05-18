//HANDLER DA PAGINA PRINCIPAL DO USUARIO NÃO LOGADO

import { Modals } from './dom.js'

const btnLogar = document.querySelector('.btnLoginHome')

btnLogar.addEventListener('click', function(event){
  const clicouLogin = event.target.classList
  console.log(clicouLogin[0] === 'btnLoginHome')

  if(clicouLogin[0] === 'btnLoginHome'){
    Modals.modalLogin()
  }
})




