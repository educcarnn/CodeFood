import { ListarProdutos } from '../models/Api.js';

const section = document.querySelector('.container-cards')

class Produtos{
    static preco = 0

    static produtos = []
    
    static mostrarProdutos(items) {
        const ul = document.createElement('ul')
        ul.id = 'lista-de-cards'
        items.forEach(({imagem, nome, descricao, categoria, preco}) => {

            const li = document.createElement('li')
            li.classList.add('card-produto')

            const imagemProduto = document.createElement('img')
            imagemProduto.src = imagem

            const nomeProduto = document.createElement('h2')
            nomeProduto.innerText = nome

            const descricaoProduto = document.createElement('p')
            descricaoProduto.innerText = descricao

            const categoriaProdutos = document.createElement('span')
            categoriaProdutos.innerText = categoria
            categoriaProdutos.id = 'categoria'

            const precoProdutos = document.createElement('span')
            precoProdutos.innerText = preco
            precoProdutos.id = 'preco'

            const imgAddCard = document.createElement('img')
            imgAddCard.src = "/src/styles/imgs/btnAddCard.svg"
            imgAddCard.id = "botaoAdd"

            const criarUL = document.createElement('ul')
            criarUL.id = 'ulCarrinho'

            imgAddCard.addEventListener('click', (e) =>{
               
               const carrinho = document.querySelector('#corpo-carrinho')
               criarUL.innerHTML = ''
                /*
                Extra
                1 - Se toda vez que o produto for adicionado o localstorage, sobreescrever os valores dentro sem problemas,
                caso ele pare na primeira parte do get e não faça mais nada
                2 - Criar uma varíavel contadora e comparar array caso esteja vazio, resetar a variável
                */
               console.log(e.target.parentElement.childNodes)
                const criarLi = document.createElement('li')
                criarLi.id = 'liCarrinho'

                const imgProdutoCarrinho = document.createElement('img')
                imgProdutoCarrinho.src = e.target.parentElement.childNodes[0].src
                imgProdutoCarrinho.id = 'imagemProdutoNoCarrinho'


               this.produtos = {

                   imagem: e.target.parentElement.childNodes[0].src
               }
               localStorage.setItem('produtos', this.produtos)
               console.log(this.produtos)
               
              
                        carrinho.appendChild(criarUL)
                                criarUL.appendChild(criarLi)
                                    criarLi.appendChild(imgProdutoCarrinho)
            })

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

    static compararArray(){

    }
}



const produtos = await ListarProdutos.metodoGet()
Produtos.mostrarProdutos(produtos)






