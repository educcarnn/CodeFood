import { ListarProdutos } from '../models/Api.js';

const produtos = await ListarProdutos.metodoGet()
const section = document.querySelector('.container-cards')

class Produtos{
    static mostrarProdutos() {
        const ul = document.createElement('ul')
        ul.id = 'lista-de-cards'
        produtos.forEach(({imagem, nome, descricao, categoria, preco}) => {

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

            section.appendChild(ul)
                ul.appendChild(li)
                    li.appendChild(imagemProduto)
                    li.appendChild(nomeProduto)
                    li.appendChild(descricaoProduto)
                    li.appendChild(categoriaProdutos)
                    li.appendChild(precoProdutos)
        })
    }
}

export {Produtos}