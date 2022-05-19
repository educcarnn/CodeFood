/* Públicas*/
import { Login } from "../models/Api.js"

//Login
const button = document.querySelector('.btnLoginModal')
const body = document.querySelector('body')

class Validacao{

    static async Login(){
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
            const body = document.querySelector('body')
    
             const div = document.createElement('div')
            div.id = 'erroLogin'
            div.innerText = 'Problema no seu login, verifique-o'
            body.appendChild(div)
    /*CSS na home */
            setTimeout(() => {
                    div.remove()
          }, 1500);
            }
            else {
                localStorage.setItem('token', status)
                window.location = `/testes.html`
            }
        }
    static async metodoCadastrar(){
                const valoresCadastro = [...formCadastro]
                if(valoresCadastro[0].value === '' || valoresCadastro[1].value === '' || valoresCadastro[2].value === '' || valoresCadastro[3] === '') {
                    const mensagemErro = document.createElement('p')
                    mensagemErro.innerText = 'Preencha todos os dados para prosseguir'
                    mensagemErro.id = 'restricaoTipo'
                    body.appendChild(mensagemErro)
        
                    setTimeout(() => {
                        mensagemErro.remove()
                    }, 1500);
                }
        
                else if(valoresCadastro[2].value !== valoresCadastro[3].value) {
        
                    alert('senhas diferentes')
                    const statusSenha = document.createElement('p')
                    statusSenha.innerText = 'Digite a mesma senha para ambos campos'
                    statusSenha.id = 'statusSenha'
                    body.appendChild(statusSenha)
        
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
                        body.appendChild(erroCadastro)
        
                        setTimeout(() => {
                            erroCadastro.remove()
                        }, 1500)
                    }
                    else {
                      
                
                        setTimeout(() => {
                            window.location = `/src/pages/homeAdmin.html`
                        }, 1500);
                        
                    }
                }
            }
}
        




export { Validacao }

//o login precisa ser trabalhado com await, caso ele precise ser rediredicionado para locais diferentes 

// a melhor forma é já trabalhando retornando sua respos 

// Cadastro

// Caminhos páginas

/* Privadas*/
// Grande parte das alterações estarão no then