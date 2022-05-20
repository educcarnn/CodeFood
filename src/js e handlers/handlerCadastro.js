import { Cadastro } from "../models/Api.js"

const btLogin = document.querySelector('.btnCadastrar')
const btnHome = document.querySelector('.homePage')
const btnCadastrar = document.querySelector('.btnCadastrar')
const form = document.querySelector('.formularioCadastroCliente')

btLogin.addEventListener('click', function(event){
  const clicouCadastrar = event.target.classList
  console.log(event)
})

btnHome.addEventListener('click', function(){
  window.location = '/index.html'
})

btnCadastrar.addEventListener('click', async function(event){
  event.preventDefault()

  const valoresCadastro = [...form]
  console.log(valoresCadastro)
  if(valoresCadastro[0].value === '' || valoresCadastro[1].value === '' || valoresCadastro[2].value === '' || valoresCadastro[3] === '') {
      const mensagemErro = document.createElement('p')
      mensagemErro.innerText = 'Preencha todos os dados para prosseguir'
      mensagemErro.id = 'restricaoTipo'
      form.appendChild(mensagemErro)

      setTimeout(() => {
          //mensagemErro.remove()
      }, 1500);
  }

  else if(valoresCadastro[2].value !== valoresCadastro[3].value) {

      alert('senhas diferentes')
      const statusSenha = document.createElement('p')
      statusSenha.innerText = 'Digite a mesma senha para ambos campos'
      statusSenha.id = 'statusSenha'
      form.appendChild(statusSenha)

      setTimeout(() => {
          statusSenha.remove()
      }, 1500);
  }
  else {
      let obj = {
          name: valoresCadastro[0].value,
          email: valoresCadastro[1].value,
          password: valoresCadastro[2].value
      }

      const resposta = await Cadastro.metodoPost(obj)
      console.log(resposta)
      if(resposta === "User Already Exists!") {
          alert('usuário já cadastrado')
          const erroCadastro = document.createElement('p')
          erroCadastro.innerText = 'E-mail de usuário existente, tente outro'
          erroCadastro.id = 'erroCadastro'
          form.appendChild(erroCadastro)

          setTimeout(() => {
              erroCadastro.remove()
          }, 1500)
      }
      else {
        
  
          setTimeout(() => {
              //window.location = `/src/pages/homeAdmin.html`
          }, 1500);
          
      }
  }
  
  
})





