import { Privados } from "../models/Api.js"
import { ProdutosCriados } from "../models/PrivadoUser.js"


const secaoPrincipal = document.getElementById('secaoPrincipal')

class Modals{

  static modalCadastroProduto(){

    const backGroundModal = document.createElement('div')
    backGroundModal.classList = 'backGroundModal'
    
    const modalCadastroProduto = document.createElement('div')
    modalCadastroProduto.classList = 'modalCadastroProduto'
    backGroundModal.appendChild(modalCadastroProduto)

    const headerModalCadastroProduto = document.createElement('div')
    headerModalCadastroProduto.classList = 'headerModalCadastroProduto'
    modalCadastroProduto.appendChild(headerModalCadastroProduto)

    const tituloCadastroProduto = document.createElement('h3')
    tituloCadastroProduto.classList = 'tituloCadastroProduto'
    tituloCadastroProduto.innerText = 'Cadastro de Produto'

    const btnFecharCadasto = document.createElement('button')
    btnFecharCadasto.classList = 'btnFecharCadasto'
    btnFecharCadasto.innerText = 'X'

    headerModalCadastroProduto.append(tituloCadastroProduto, btnFecharCadasto)

    const formularioCadastroProduto = document.createElement('form')
    formularioCadastroProduto.classList = 'formularioCadastroProduto'
    formularioCadastroProduto.ariaRequired = 'true'
    modalCadastroProduto.appendChild(formularioCadastroProduto)

    const containerCategoria = document.createElement('div')
    containerCategoria.classList = 'containerCategoria'
    formularioCadastroProduto.appendChild(containerCategoria)

    const categoriaProduto = document.createElement('label')
    categoriaProduto.classList = 'categoriaTitulo'
    categoriaProduto.innerText = 'Nome do produto'

    const inputNome = document.createElement('input')
    inputNome.classList = 'categoria'
    inputNome.type = 'text'
    inputNome.name = 'nome'
    inputNome.placeholder = 'Digite o nome'
    inputNome.ariaRequired = 'true'

    containerCategoria.append(categoriaProduto, inputNome)

    const containerCategoria2 = document.createElement('div')
    containerCategoria2.classList = 'containerCategoria'

    formularioCadastroProduto.appendChild(containerCategoria2)

    const categoriaDescricao = document.createElement('label')
    categoriaDescricao.classList = 'categoriaTitulo'
    categoriaDescricao.innerText = 'Categorias'

    const inputDescricao = document.createElement('input')
    inputDescricao.type = 'text'
    inputDescricao.name = 'descricao'
    inputDescricao.placeholder = 'Digite a descrição'
    inputDescricao.classList = 'categoria descricao'
    inputDescricao.ariaRequired = 'true'

    containerCategoria2.append(categoriaDescricao, inputDescricao)

    const containerCategoria3 = document.createElement('div')
    containerCategoria3.classList = 'containerCategoria'

    formularioCadastroProduto.appendChild(containerCategoria3)

    const categoriaCategorias = document.createElement('label')
    categoriaCategorias.classList = 'categoriaTitulo'
    categoriaCategorias.innerText = 'Categorias'

    const categoriaBtn = document.createElement('div')
    categoriaBtn.classList = 'categoriaBtn'

    containerCategoria3.append(categoriaCategorias, categoriaBtn)

    const btnPanificadora = document.createElement('button')
    btnPanificadora.type = 'button'
    btnPanificadora.id = 'panificadora'
    btnPanificadora.name = 'categoria'
    btnPanificadora.classList = 'btnCategoria'
    btnPanificadora.value = 'panificadora'
    btnPanificadora.innerText = 'Panificadora'

    const btnFrutas = document.createElement('button')
    btnFrutas.type = 'button'
    btnFrutas.id = 'frutas'
    btnFrutas.name = 'categoria'
    btnFrutas.classList = 'btnCategoria'
    btnFrutas.value = 'frutas'
    btnFrutas.innerText = 'Frutas'

    const btnBebidas = document.createElement('button')
    btnBebidas.type = 'button'
    btnBebidas.id = 'bebidas'
    btnBebidas.name = 'categoria'
    btnBebidas.classList = 'btnCategoria'
    btnBebidas.value = 'bebidas'
    btnBebidas.innerText = 'Bebidas'

    categoriaBtn.append(btnPanificadora, btnFrutas, btnBebidas)

    const containerCategoria4 = document.createElement('div')
    containerCategoria4.classList = 'containerCategoria'

    formularioCadastroProduto.appendChild(containerCategoria4)

    const categoriaImg = document.createElement('label')
    categoriaImg.classList = 'categoriaTitulo'
    categoriaImg.innerText = 'Link da imagem'

    const inputImg = document.createElement('input')
    inputImg.type = 'text'
    inputImg.name = 'imagem'
    inputImg.placeholder = 'Insira seu link'
    inputImg.classList = 'categoria'
    inputImg.ariaRequired = 'true'

    containerCategoria4.append(categoriaImg, inputImg)

    const btnCadastrar = document.createElement('button')
    btnCadastrar.type = 'submit'
    btnCadastrar.classList = 'btnCadastrar'
    btnCadastrar.innerText = 'Cadastrar'

    formularioCadastroProduto.appendChild(btnCadastrar)

    secaoPrincipal.append(backGroundModal)

    btnFecharCadasto.addEventListener('click', function(event){
      const clicouFechar = event.target.classList

      if(clicouFechar[0] === 'btnFecharCadasto'){
        secaoPrincipal.removeChild(backGroundModal)
      }
    })

  }

  static modalLogin(){

    const backGroundModal = document.createElement('div')
    backGroundModal.classList = 'backGroundModal'

    secaoPrincipal.append(backGroundModal)

    const modalLogin = document.createElement('div')
    modalLogin.classList = 'containerModal usuarioNaoCadastrado'

    backGroundModal.appendChild(modalLogin)

    const btnFecharModal = document.createElement('button')
    btnFecharModal.classList = 'btnFecharModal'
    btnFecharModal.innerText = 'X'

    const tituloLogin = document.createElement('h2')
    tituloLogin.classList = 'modalTituloLogin'
    tituloLogin.innerText = 'Login'

    const formularioLogin = document.createElement('form')
    formularioLogin.classList = 'formularioLogin'
    formularioLogin.ariaRequired = 'true'

    modalLogin.append(btnFecharModal, tituloLogin, formularioLogin)

    const inputEmail = document.createElement('input')
    inputEmail.type = 'email'
    inputEmail.name = 'name'
    inputEmail.classList = 'inputs'
    inputEmail.placeholder = 'E-mail'

    const inputSenha = document.createElement('input')
    inputSenha.type = 'password'
    inputSenha.name = 'password'
    inputSenha.classList = 'inputs'
    inputSenha.placeholder = 'Senha'

    const containerCadastrese = document.createElement('div')

    const textoCadastrar = document.createElement('span')
    textoCadastrar.classList = 'textoCadastrar'
    textoCadastrar.innerHTML = 'Ainda não é cadastrado? <a href="">Cadastre-se agora!</a>'

    containerCadastrese.appendChild(textoCadastrar)

    const btnLogin = document.createElement('button')
    btnLogin.type = 'submit'
    btnLogin.classList = 'btnLoginModal'
    btnLogin.innerText = 'Login'

    formularioLogin.append(inputEmail, inputSenha, containerCadastrese, btnLogin)

    btnFecharModal.addEventListener('click', function(event){
      const clicouFechar = event.target.classList

      if(clicouFechar[0] === 'btnFecharModal'){
        secaoPrincipal.removeChild(backGroundModal)
      }
    })
  }

  static async modalExcluirProduto(id){

    console.log(id)
    const backGroundModalExcluir = document.createElement('div')
    backGroundModalExcluir.classList = 'backGroundModalExcluir'

    secaoPrincipal.appendChild(backGroundModalExcluir)

    const modalExclusaoProduto = document.createElement('div')
    modalExclusaoProduto.classList = 'modalExclusaoProduto'

    backGroundModalExcluir.appendChild(modalExclusaoProduto)

    const headerModalExclusaoProduto = document.createElement('div')
    headerModalExclusaoProduto.classList = 'headerModalExclusaoProduto'

    modalExclusaoProduto.appendChild(headerModalExclusaoProduto)

    const tituloExclusao = document.createElement('h3')
    tituloExclusao.classList = 'tituloCadastroProduto'
    tituloExclusao.innerText = 'Exclusão de produto'

    const btnFecharExclusao = document.createElement('button')
    btnFecharExclusao.classList = 'btnFecharCadasto'
    btnFecharExclusao.innerText = 'X'

    headerModalExclusaoProduto.append(tituloExclusao, btnFecharExclusao)

    const textoExclusao = document.createElement('p')
    textoExclusao.classList = 'textoExclusao'
    textoExclusao.innerText = 'Tem certeza que deseja excluir este produto?'

    const containerBtnsExclusao = document.createElement('div')
    containerBtnsExclusao.classList = 'containerBtnExclusao'

    modalExclusaoProduto.append(textoExclusao, containerBtnsExclusao)

    const btnSim = document.createElement('button')
    btnSim.classList = 'btnSim'
    //btnSim.id = await ProdutosCriados.metodoGet()
    
    btnSim.innerText = 'Sim'

    const btnNao = document.createElement('button')
    btnNao.classList = 'btnNao'
    btnNao.innerText = 'Não'

    containerBtnsExclusao.append(btnSim, btnNao)

    modalExclusaoProduto.addEventListener('click', async function(event){
      const clicouFechar = event.target.classList

      if(clicouFechar[0] === 'btnNao' || clicouFechar[0] === 'btnFecharCadasto'){
        secaoPrincipal.removeChild(backGroundModalExcluir)
      }


    })
    btnSim.addEventListener('click', (e) =>{
        const valor = e.target.id  
      
    })



  }

  static modalStatusCadastrado(){

  }
}
 
export { Modals }