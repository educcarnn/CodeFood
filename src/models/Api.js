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
        await fetch(`${this.BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosCadastro)
        })
        .then(response => response.json())
        .then((response) => {
        console.log(response)
        /*
        Armazenar com local storage a resposta, para na hora do cadastro da um getLocalStorage

        Baseado nessa mensagem, a gente pode redirecionanar a pessoa com windows location com set timeout, caso o cadas
        apareca uma mensagem de erro, mostrar
        a resposta do cadastro é um objeto, do login é um token
        */
                
        })
        .catch((err) => {
        console.error(err);
    })
    }
}
class Login {
    static BASE_URL = "https://api-kenzie-food.herokuapp.com"
    
    static async metodoPost(dadosLogin) {
        await fetch(`${this.BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosLogin)
        })
        .then(response => response.json())
        .then((response) => {
        console.log(response)
        /*
        aqui é gerado um token que será armazenado no localStorage
        */
      
        })
        .catch((err) => {
            console.error(err);
        })
        
        
    }  
}

/// Rotas Privadas
export {ListarProdutos}
export {Cadastro}
export {Login}