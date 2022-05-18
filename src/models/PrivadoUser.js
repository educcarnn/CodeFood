import { Privados } from "./Api.js"

class ProdutosCriados{
    
    static metodoGet(itemsPrivados) {
        const ul = document.querySelector('.lista-produtos')
        console.log(itemsPrivados)
        itemsPrivados.forEach(({id, imagem, nome, categoria, descricao}) => {
            
            const li = document.createElement('li')
            console.log(id)

            const imagemProdutoPrivado = document.createElement('img')
            imagemProdutoPrivado.src = imagem
            imagemProdutoPrivado.id = 'foto-produto'

            const nomeProdutoPrivado = document.createElement('p')
            nomeProdutoPrivado.innerText = nome
            nomeProdutoPrivado.value = id
            nomeProdutoPrivado.id = 'nome-produto'

            const categoriaProdutoPrivado = document.createElement('span')
            categoriaProdutoPrivado.innerText = categoria
            categoriaProdutoPrivado.id = "categoria-produto"

            const descricaoProdutoPrivado = document.createElement('p')
            descricaoProdutoPrivado.innerText  = descricao
            descricaoProdutoPrivado.id = 'descricao-produto'

            const divPrivado = document.createElement('div')
            divPrivado.id = 'acoes'
                const imgDivPrivado =document.createElement('img')
                imgDivPrivado.id = 'editar'
                //imgDivPrivado.src = 
                const excluirDivPrivado = document.createElement('img')
                excluirDivPrivado.id ='excluir'
                //excluirDivPrivado.src

            ul.appendChild(li)
                li.appendChild(imagemProdutoPrivado)
                li.appendChild(nomeProdutoPrivado)
                li.appendChild(categoriaProdutoPrivado)
                li.appendChild(descricaoProdutoPrivado)
                    li.appendChild(divPrivado)
                    divPrivado.appendChild(imgDivPrivado)
                    divPrivado.appendChild(excluirDivPrivado)

         })
    }
}

const produtosPrivados = await Privados.listarProdutosGet()
ProdutosCriados.metodoGet(produtosPrivados)

