/* Públicas*/
import { Login } from "../models/Api.js"

//Login
const button = document.querySelector('.btnLoginModal')


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
}

class Input2{

}

export { Validacao }

//o login precisa ser trabalhado com await, caso ele precise ser rediredicionado para locais diferentes 

// a melhor forma é já trabalhando retornando sua respos 

// Cadastro

// Caminhos páginas

/* Privadas*/
// Grande parte das alterações estarão no then