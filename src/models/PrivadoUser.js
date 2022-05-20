import { Privados } from "./Api.js"

class ProdutosCriados{
    static DataBase = []
    static async metodoGet() {

        const produtoCadastrado = await Privados.listarProdutosGet()
       
        console.log(produtoCadastrado)

        const ul = document.querySelector('.lista-produtos')
        produtoCadastrado.forEach(({id, imagem, nome, categoria, descricao}) => {

            const li = document.createElement('li')
            li.productId = id

            const imagemProdutoPrivado = document.createElement('img')
            imagemProdutoPrivado.src = imagem
            imagemProdutoPrivado.id = 'foto-produto'

            const nomeProdutoPrivado = document.createElement('p')
            nomeProdutoPrivado.innerText = nome
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
                imgDivPrivado.src = 'src/styles/imgs/icone-editar-dashboard.png'
                imgDivPrivado.id = 'editar'
            
                //imgDivPrivado.src = 
                const excluirDivPrivado = document.createElement('img')
                excluirDivPrivado.src = 'src/styles/imgs/icone-excluir-dashboard.png'
                excluirDivPrivado.id ='excluir'
                excluirDivPrivado.classList.add(id)
              
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

ProdutosCriados.metodoGet()



export {ProdutosCriados}