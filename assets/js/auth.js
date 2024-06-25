import { auth } from './firebase.js'
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
document.addEventListener('DOMContentLoaded', () => {

    const formLogin = document.querySelector('.form-login')
    const emailInput = document.querySelector('.email-admin')
    const senhaInpunt = document.querySelector('.senha-admin')

    formLogin.addEventListener('submit', (e) => {
        e.preventDefault()
        const email = emailInput.value
        const senha = senhaInpunt.value

        if (formLogin) {
            signInWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    const user = userCredential.user
                    alert('usuário logado com sucesso')
                    emailInput.value = ''
                    senhaInpunt.value = ''
                })
                .catch(() => {
                    alert('verifique a sua conexão ou o seu email e senha.')
                })
        }



    })
})
