const body = document.querySelector("#body")
const btnColor = document.querySelector("#btnColor")
const imageCE = document.querySelector("#CE")
const header = document.querySelector("header")

let claro = true

btnColor.addEventListener("click", ()=>{
    if(claro===true){
        modoEscuro();
    }else{
        modoClaro();
    }
})

function modoClaro(){
    header.classList.add("background-branco")
    header.classList.remove("background-preto")
    body.classList.add("bgClaro")
    body.classList.remove("bgEscuro")
    imageCE.src = "assets/images/soll.png"
    claro=true
}

function modoEscuro(){
    header.classList.add("background-preto")
    header.classList.remove("background-branco")
    body.classList.remove("bgClaro")
    body.classList.add("bgEscuro")
        imageCE.src = "assets/images/moon.png"
    claro=false
}