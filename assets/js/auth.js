import { auth } from './firebase.js'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.querySelector('.form-login')
    const emailInput = document.querySelector('.email-admin')
    const senhaInput = document.querySelector('.senha-admin')
    const linkSair = document.querySelector('.link-sair')
    const formPost = document.querySelector('.form-post')
    const tituloLogin = document.querySelector('.titulo-login')
    const mensagens = document.querySelector('.mensagens')

    // mensagens
    const logadoSucesso = 'Usuário logado com sucesso.'
    

    const verifiqueConexao = 'Verifique a sua conexão ou o seu email e senha.'
   

    const logoutSucesso = 'Logout realizado com sucesso.'

    const erroInesperado = 'Ocorreu um erro inesperado.'
    

    // Limpar mensagem
    const limparMensagem = () =>
        setInterval(()=>{
            mensagens.innerHTML = alertaUsuario
        }, 3000)
    


    // Evento de login
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault()
            const email = emailInput.value
            const senha = senhaInput.value

            signInWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    const user = userCredential.user
                    alertaUsuario(logadoSucesso)
                    limparMensagem()
                    emailInput.value = ''
                    senhaInput.value = ''
                })
                .catch(() => {
                    alertaUsuario(verifiqueConexao)
                    limparMensagem()
                })
        })
    }

    // Evento de logout
    if (linkSair) {
        linkSair.addEventListener('click', () => {
            signOut(auth)
                .then(()=>{
                   aletaUsuario (logadoSucesso)
                    limparMensagem()
                })
                .catch(()=>{
                    alertaUsuario(verifiqueConexao)
                    limparMensagem()
                })
        })
    }

    // Mudança de estado
    onAuthStateChanged(auth,(user)=>{
        if(user){
            const uid = user.uid
              //
            if(linkSair) linkSair.classList.remove('hide')
            if(formLogin) formLogin.classList.add('hide')
            if(formPost) formPost.classList.remove('hide')
            if(tituloLogin) tituloLogin.innerHTML = 'ACESSO AO ADMINISTRADOR LIBERADO'
        }else{
            if(linkSair) linkSair.classList.add('hide')
            if(formLogin) formLogin.classList.remove('hide')
            if(formPost) formPost.classList.add('hide')
            if(tituloLogin) tituloLogin.innerHTML = 'FAÇA O LOGIN COMO ADMINISTRADOR!'
        }
    })


})