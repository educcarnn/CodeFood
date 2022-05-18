import { ListarProdutos } from '../models/Api.js';

const section = document.querySelector('.container-cards')
const statusCarrinhoVazio = document.querySelector('#mensagemStatusCarrinho')
const criarUL = document.createElement('ul')

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
            precoProdutos.innerText = `R$ ${preco},00`
            precoProdutos.id = 'preco'

            const imgAddCard = document.createElement('img')
            imgAddCard.src = "/src/styles/imgs/btnAddCard.svg"
            imgAddCard.id = "botaoAdd"


            imgAddCard.addEventListener('click', (e) =>{
               this.quantidade++
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
                //iconeRemover.src = 
                
                iconeRemover.addEventListener('click', (e) =>{

                })
                const categoriaProdutoCarrinho = document.createElement('span')
                categoriaProdutoCarrinho.innerText = e.target.parentElement.childNodes[3].innerText
                categoriaProdutoCarrinho.id = "categoriaProdutoCarrinho"
                
                const precoProdutoCarrinho = document.createElement('span')
                precoProdutoCarrinho.innerText = e.target.parentElement.childNodes[4].innerText

           
               this.valorLocal++
               this.localProdutos.push({ 
                   imagem: e.target.parentElement.childNodes[0].src
               })
               localStorage.setItem((`produtos${this.valorLocal}`), JSON.stringify(this.localProdutos))
               /*
               Api extra, todos jogados no local storage, serão chamados dentro dessa classe para serem consumidos pela api
               acredito não haver nenhuma interação visual para o usuário
               */
                        carrinho.appendChild(criarUL)
                                criarUL.appendChild(criarLi)
                                    criarLi.appendChild(imgProdutoCarrinho)
                                    criarLi.appendChild(divInfosCarrinho)
                                            divInfosCarrinho.appendChild(nomeProdutoCarrinho)
                                            divInfosCarrinho.appendChild(categoriaProdutoCarrinho)
                                            divInfosCarrinho.appendChild(precoProdutoCarrinho)
                                    
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

    static controleArray(){
        /*
        essa classe é apenas de controle para que a estilização possa ser retomarda ao normal, caso o comprimento do array seja vazio ou zero
        */
    }


}



const produtos = await ListarProdutos.metodoGet()
Produtos.DataBase = produtos
Produtos.mostrarProdutos(produtos)
export { Produtos }
