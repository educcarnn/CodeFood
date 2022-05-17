class ListarProdutos{
    static BASE_URL = 'https://api-kenzie-food.herokuapp.com'
    static async metodoGet(){
        
        const response = await fetch(`${this.BASE_URL}/products`) 
        const data     = await response.json()

        return data
    }
    /*
    static BASE_URL = 'https://api-kenzie-food.herokuapp.com'
    static async metodoGet(){
        const produtosUrl = `${this.BASE_URL}/products`

        const produtos = await fetch(produtosUrl, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
        return produtos
        */
    }

export {ListarProdutos}