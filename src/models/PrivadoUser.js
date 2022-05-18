import { Modals } from "../js e handlers/dom.js"
import { Privados } from "./Api.js"
const secaoPrincipal = document.getElementById('secaoPrincipal')

class ProdutosCriados{
    static armazenarId = []


    static async metodoGet(itemsPrivados) {



        const ul = document.querySelector('.lista-produtos')
      itemsPrivados.forEach(({id, imagem, nome, categoria, descricao}) => {
            
            const li = document.createElement('li')

            const imagemProdutoPrivado = document.createElement('img')
            imagemProdutoPrivado.src = imagem
            imagemProdutoPrivado.id = 'foto-produto'

            const nomeProdutoPrivado = document.createElement('p')
            nomeProdutoPrivado.innerText = nome
            nomeProdutoPrivado.classList.add(id)
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
                this.armazenarId.push(id)
                excluirDivPrivado.classList.add(id)
                
                /*
                */
                secaoPrincipal.addEventListener('click', (e)=> {
                    const teste = e.target.classList
                    console.log(teste)
                    if(teste[0] === 'btnSim') {
                  
                        console.log(id)
                        console.log(teste[0])
                        //console.log(btnSim)
                    Privados.deletarProdutos(id)
                        //location.reload()
                    }
                })
                

              
            ul.appendChild(li)
                li.appendChild(imagemProdutoPrivado)
                li.appendChild(nomeProdutoPrivado)
                li.appendChild(categoriaProdutoPrivado)
                li.appendChild(descricaoProdutoPrivado)
                    li.appendChild(divPrivado)
                    divPrivado.appendChild(imgDivPrivado)
                    divPrivado.appendChild(excluirDivPrivado)

         })

         secaoPrincipal.addEventListener('click', (e)=> {
            const teste = e.target.classList
            console.log(teste)
            if(teste[0] === 'btnSim') {
          
                console.log(this.armazenarId)
                console.log(teste[0])
                //console.log(btnSim)
            Privados.deletarProdutos(this.armazenarId)
                //location.reload()
            }
        })
    }
}

const produtosPrivados = await Privados.listarProdutosGet()
ProdutosCriados.metodoGet(produtosPrivados)

export {ProdutosCriados}