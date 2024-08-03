//Const cores
const body = document.querySelector("#body")
const btnColor = document.querySelector("#btnColor")
const imageCE = document.querySelector("#CE")
const header = document.querySelector("header")
const h1diagrama = document.querySelector("#h1diagrama")
const mainDiagrama = document.querySelector("#mainDiagrama")
const pav1 = document.querySelector("#pav1")
const pav2 = document.querySelector("#pav2")
const links = document.querySelector(".links")

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

//Função que deixa as imagens em modo claro
function imgClaro(){
    pav1.src
}


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
    links.classList.add("text-preto")
    links.classList.remove("text-branco")
    imageCE.src = "assets/images/soll.png"
    pav1.src="assets/images/mapeamento_racks.png"
    pav2.src="assets/images/mapeamento_racks_2.png"
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
    links.classList.remove("text-preto")
    links.classList.add("text-branco")
    imageCE.src = "assets/images/moon.png"
    pav1.src="assets/images/mapeamento_racks_branco.png"
    pav2.src="assets/images/mapeamento_racks_2_branco.png"

    claro=false
}

/*
COLAPSE
*/

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