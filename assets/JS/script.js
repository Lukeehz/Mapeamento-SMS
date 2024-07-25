//Const cores
const body = document.querySelector("#body")
const btnColor = document.querySelector("#btnColor")
const imageCE = document.querySelector("#CE")
const header = document.querySelector("header")
const h1diagrama = document.querySelector("#h1diagrama")
const mainDiagrama = document.querySelector("#mainDiagrama")

//Bool auxiliar
let claro = true

//Evento que chama as funções de modo claro ou escuro
btnColor.addEventListener("click", ()=>{
    if(claro===true){
        modoEscuro();
    }else{
        modoClaro();
    }
})


//Função que deixa  a tela em modo claro
function modoClaro(){
    mainDiagrama.classList.remove('background-preto')
    mainDiagrama.classList.add('background-branco')
    h1diagrama.classList.add('texto-preto')
    h1diagrama.classList.remove('texto-branco')
    header.classList.add("background-branco")
    header.classList.remove("background-preto")
    body.classList.add("bgClaro")
    body.classList.remove("bgEscuro")
    imageCE.src = "assets/images/soll.png"
    claro=true
}

//Função que deixa a tela em modo escuro
function modoEscuro(){
    mainDiagrama.classList.add('background-preto')
    mainDiagrama.classList.remove('background-branco')
    h1diagrama.classList.remove('texto-preto')
    h1diagrama.classList.add('texto-branco')
    header.classList.add("background-preto")
    header.classList.remove("background-branco")
    body.classList.remove("bgClaro")
    body.classList.add("bgEscuro")
        imageCE.src = "assets/images/moon.png"
    claro=false
}

const btnColaps = document.querySelector("#btnColaps")
const textColapse = document.querySelector("#textColapse")
auxColaps = false

btnColaps.addEventListener("click", ()=>{
    if(auxColaps==false){
        colapseInv()
    }else{
        ColapseVisivel()
    }
})

function colapseInv (){
    textColapse.classList.add("inv")
    auxColaps = true
}
function ColapseVisivel (){
    textColapse.classList.remove("inv")
    auxColaps=false
}