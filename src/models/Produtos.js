import { ListarProdutos } from '../models/Api.js';

const section = document.querySelector('.container-cards')
const statusCarrinhoVazio = document.querySelector('#mensagemStatusCarrinho')
const criarUL = document.createElement('ul')


    const quantidade = document.querySelector('#quantidade')
    const total = document.querySelector('#total')

    const paragrafoDeQuantidade = document.createElement('p')
    const precoDeQuantidade = document.createElement('p')

class Produtos{
    static preco = 0
    static quantidade = 0

    static DataBase = []

    static valorLocal = 0
    static localProdutos = []
    
    static mostrarProdutos(items) {

        const ul = document.createElement('ul')
        ul.id = 'lista-de-cards'
        items.forEach(({id, imagem, nome, descricao, categoria, preco}) => {
            /*
            Calculo de quantidade e preco
            */
            const li = document.createElement('li')
            li.classList.add('card-produto')

            const imagemProduto = document.createElement('img')
            imagemProduto.src = imagem

            const nomeProduto = document.createElement('h2')
            nomeProduto.innerText = nome
            nomeProduto.id = id

            const descricaoProduto = document.createElement('p')
            descricaoProduto.innerText = descricao

            const categoriaProdutos = document.createElement('span')
            categoriaProdutos.innerText = categoria
            categoriaProdutos.id = 'categoria'

            const precoProdutos = document.createElement('span')
            precoProdutos.innerText = `R$ ${preco}`
            precoProdutos.id = 'precoCarrinho'
            

            const imgAddCard = document.createElement('img')
            imgAddCard.src = "/src/styles/imgs/btnAddCard.svg"
            imgAddCard.id = "botaoAdd"

            imgAddCard.addEventListener('click', (e) =>{
               this.quantidade++
               paragrafoDeQuantidade.innerText = `Quantidade: ${this.quantidade}`

               const calculoPreco = e.target.parentElement.childNodes[4].textContent.split(' ')
               this.preco += Number(calculoPreco[1]) 
         
               precoDeQuantidade.innerText = `Preço: R$ ${this.preco}`

               const carrinho = document.querySelector('#corpo-carrinho')
               criarUL.id = 'ulCarrinho'
               statusCarrinhoVazio.innerText = ''
                const criarLi = document.createElement('li')
                criarLi.id = 'liCarrinho'

                const imgProdutoCarrinho = document.createElement('img')
                imgProdutoCarrinho.src = e.target.parentElement.childNodes[0].src
                imgProdutoCarrinho.id = 'imagemProdutoNoCarrinho'

                const divInfosCarrinho = document.createElement('div')
                divInfosCarrinho.id = 'divInfoCarrinho' 

                const nomeProdutoCarrinho = document.createElement('h2')
                nomeProdutoCarrinho.innerText = e.target.parentElement.childNodes[1].innerText
                nomeProdutoCarrinho.classList.add(id)
                nomeProdutoCarrinho.id = 'nomeProdutoCarrinho'   

                const iconeRemover = document.createElement('img')
                iconeRemover.src = "/src/styles/imgs/iconeLixeira.svg"
                iconeRemover.id = 'iconeRemover'
                iconeRemover.addEventListener('click', (e) =>{
                    localStorage.removeItem('carrinho')
                    e.target.parentElement.remove('')
                   this.quantidade--
                   paragrafoDeQuantidade.innerText = `Quantidade: ${this.quantidade}`
                    

                   const calculoPreco = e.target.parentElement.childNodes[4].textContent.split(' ')
                   this.preco -= Number(calculoPreco[1]) 
                   precoDeQuantidade.innerText = `Preço: R$ ${this.preco}`
    
                   if(this.quantidade === 0) {
                    const ul = document.querySelector('#ulCarrinho')
                    paragrafoDeQuantidade.innerHTML = ''
                    precoDeQuantidade.innerHTML = ''
                    statusCarrinhoVazio.innerText = 'Seu carrinho está vazio, volte a adicionar produtos no carrinho'
                    ul.remove('')
                }


                })
                const categoriaProdutoCarrinho = document.createElement('span')
                categoriaProdutoCarrinho.innerText = e.target.parentElement.childNodes[3].innerText
                categoriaProdutoCarrinho.id = "categoriaProdutoCarrinho"
                
                const precoProdutoCarrinho = document.createElement('span')
                precoProdutoCarrinho.innerText = e.target.parentElement.childNodes[4].innerText
           

               localStorage.setItem(('carrinho'), JSON.stringify(this.localProdutos))
             
               /*
               Api extra, todos jogados no local storage, serão chamados dentro dessa classe para serem consumidos pela api
               acredito não haver nenhuma interação visual para o usuário
               */
                        carrinho.appendChild(criarUL)
                                criarUL.appendChild(criarLi)
                                    criarLi.appendChild(divInfosCarrinho)

                                            criarLi.appendChild(imgProdutoCarrinho)
                                            criarLi.appendChild(nomeProdutoCarrinho)
                                            criarLi.appendChild(categoriaProdutoCarrinho)
                                            criarLi.appendChild(precoProdutoCarrinho)
                                            criarLi.appendChild(iconeRemover)
                                    quantidade.appendChild(paragrafoDeQuantidade)
                                    total.appendChild(precoDeQuantidade)
            })
                // this.DataBase.push({
                //     id: id,
                //     imagem: imagem,
                //     nome: nome, 
                //     descricao: descricao,
                //     categoria: categoria,
                //     preco: preco,
                // })
                
            section.appendChild(ul)
                ul.appendChild(li)
                    li.appendChild(imagemProduto)
                    li.appendChild(nomeProduto)
                    li.appendChild(descricaoProduto)
                    li.appendChild(categoriaProdutos)
                    li.appendChild(precoProdutos)
                    li.appendChild(imgAddCard)

        })
    }

}

const produtos = await ListarProdutos.metodoGet()
Produtos.DataBase = produtos
Produtos.mostrarProdutos(produtos)

const valor = JSON.parse(localStorage.getItem('carrinho'))

console.log(valor)
// class ProdutosLocal{
//     static localCarrinho(){
//         valor.forEach((elem) =>{
         
//         })
//     }
// }
// ProdutosLocal.localCarrinho()

export { Produtos }
