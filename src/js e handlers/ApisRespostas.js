/* Públicas*/
import { Login } from "../models/Api"


//Login
const button = document.querySelector('.btnLoginModal')
const form = document.querySelector('.formularioLogin')

class Input1 {
    static default(e){
        e.preventDefault()
        
    }
    static Login(){
        const valores = [...form]
        console.log(valores)

        const obj = {
            email: valores[0].value,
            password: valores[1].value
        }
        
        Login.metodoPost(obj)
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
}

class Input2{

}
button.addEventListener('click', Input1.default)
button.addEventListener('click', Input1.Login)

//o login precisa ser trabalhado com await, caso ele precise ser rediredicionado para locais diferentes 

// a melhor forma é já trabalhando retornando sua respos 

// Cadastro

// Caminhos páginas

/* Privadas*/
// Grande parte das alterações estarão no then