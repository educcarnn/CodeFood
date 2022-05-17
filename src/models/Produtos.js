import { ListarProdutos } from '../models/Api.js';

const produtos = await ListarProdutos.metodoGet()
const body = document.querySelector('body')

class Produtos{
    static mostrarProdutos() {
        const ul = document.createElement('ul')
        ul.id = 'ulItens'
        produtos.forEach(({imagem, nome, descricao, categoria, preco}) => {

            const li = document.createElement('li')

            const imagemProduto = document.createElement('img')
            imagemProduto.src = imagem
            imagemProduto.id = 'imagemProduto'

            const nomeProduto = document.createElement('span')
            nomeProduto.innerText = nome
            nomeProduto.id = 'nomeProduto'

            const descricaoProduto = document.createElement('span')
            descricaoProduto.innerText = descricao
            descricaoProduto.id = 'descricaoProduto'

            const categoriaProdutos = document.createElement('span')
            categoriaProdutos.innerText = categoria
            categoriaProdutos.id = 'categoriaProdutos'

            const precoProdutos = document.createElement('span')
            precoProdutos.innerText = preco
            precoProdutos.id = 'precoProdutos'

            body.appendChild(ul)
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