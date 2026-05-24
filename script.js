let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("Input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.target.value)
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
     const paragrafoErro = document.querySelector(".pessoas #erro")
     const divErro = document.querySelector(".pessoas .input-box")

    if(evento.target.value === "0") {
       
        paragrafoErro.styles.display = "block"
        divErro.setAttribute("id", "input-box")
    } else {
        paragrafoErro.styles.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }
} 

const botoesGorjeta = document.querySelectorAll(".gorjeta input[types= 'number']")
botoesGorjeta.forEach(botao => {
botao.addEventListener("click", )
})

function receberPorcentagem(evento) {
    porcentagem = Number(evento.target.value) / 100
}
