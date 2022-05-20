import { Modals } from './../js e handlers/dom.js'

class ListarProdutos{
    static BASE_URL = 'https://api-kenzie-food.herokuapp.com'
    static async metodoGet(){
        
        const response = await fetch(`${this.BASE_URL}/products`) 
        const data     = await response.json()

        return data
    }

}
class Cadastro{
    static BASE_URL ='https://api-kenzie-food.herokuapp.com'

    static async metodoPost(dadosCadastro){
          const cadastro = await fetch(`${this.BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosCadastro)
        })
        
        const data = await cadastro.json()
        return data
    
    }
}

class Login {
    static BASE_URL = "https://api-kenzie-food.herokuapp.com"
    
    static async metodoPost(dadosLogin) {
        const login = await fetch(`${this.BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosLogin)
        })
       
        const data     =  await login.json()
        return data  
    }  
}

/// Rotas Privadas
class Privados{
    
    static async listarProdutosGet(){
        const URL = "https://api-kenzie-food.herokuapp.com"
 
        const produtos = await fetch(`${URL}/my/products`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        const data = await produtos.json()
        return data
    }

    static async criarProdutosPost(dadosProduto) {
        const URL = "https://api-kenzie-food.herokuapp.com"
        
        return await fetch(`${URL}/my/products`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(dadosProduto)
        })
        .then(response => response.json())
        .then((response) => {
            if(response.status !== "Error") {
                const statusCadastro = Modals.modalStatusCadastrado()
                setTimeout(() => {
                //statusCadastro.remove()

                    //statusCadastro.removed()

                }, 3000);
            }
            else {
                const statusNaoCadastro = Modals.modalStatusNaoCadastrado()
                setTimeout(() => {

                    //statusNaoCadastro.remove()
                //statusNaoCadastro.remove()

                }, 3000);
            }
        })
    }

    static async editarProdutosPost(dadosParaAlterar, id){
        const URL = "https://api-kenzie-food.herokuapp.com"

        return await fetch(`${URL}/my/products/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(dadosParaAlterar)
        })
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
    }

    static async deletarProdutos(id) {
        const URL = "https://api-kenzie-food.herokuapp.com"

        return await fetch(`${URL}/my/products/${id}`, {
            method: "DELETE",
            headers:  {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
        })
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
}

export {ListarProdutos}
export {Cadastro}
export {Login}
export {Privados}
