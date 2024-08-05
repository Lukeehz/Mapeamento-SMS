document.addEventListener("DOMContentLoaded", () => {
    // Constantes para selecionar elementos
    const body = document.querySelector("#body");
    const btnColor = document.querySelector("#btnColor");
    const imageCE = document.querySelector("#CE");
    const header = document.querySelector("header");
    const h1diagrama = document.querySelector("#h1diagrama");
    const mainDiagrama = document.querySelector("#mainDiagrama");
    const pav1 = document.querySelector("#pav1");
    const pav2 = document.querySelector("#pav2");
    const txtdia = document.querySelector("#txtdia"), txtpv1= document.querySelector("#txtpv1"), txtpv2 = document.querySelector("#txtpv2"), asidetext = document.querySelector("#asidetext"), tt1 = document.querySelector("#tt1"), tt2 = document.querySelector("#tt2"), tt3 = document.querySelector("#tt3")
    

    // Verifique se todos os elementos necessários existem antes de adicionar eventos
    if (btnColor && header && body) {
        let claro = true;

        // Evento que chama as funções de modo claro ou escuro
        btnColor.addEventListener("click", () => {
            if (claro) {
                modoEscuro();
            } else {
                modoClaro();
            }
        });

        function modoClaro() {
            if (mainDiagrama) mainDiagrama.classList.remove('background-preto');
            if (mainDiagrama) mainDiagrama.classList.add('background-branco');
            if (h1diagrama) {
                h1diagrama.classList.add('texto-preto');
                h1diagrama.classList.remove('texto-branco');
            }
            if (header) {
                header.classList.add("background-branco");
                header.classList.remove("background-preto");
            }
            if (body) {
                body.classList.add("bgClaro");
                body.classList.remove("bgEscuro");
            }

            if (txtdia) {
                txtdia.classList.remove("texto-branco");
                txtdia.classList.add("texto-preto");
            }

            if (txtpv1) {
                txtpv1.classList.remove("texto-branco");
                txtpv1.classList.add("texto-preto");
            }
            
            if (txtpv2) {
                txtpv2.classList.remove("texto-branco");
                txtpv2.classList.add("texto-preto");
            }
            if (asidetext) {
                asidetext.classList.remove("texto-branco");
                asidetext.classList.add("texto-preto");
            }
            if (tt1) {
                tt1.classList.remove("texto-branco");
                tt1.classList.add("texto-preto");
            }
            if (tt2) {
                tt2.classList.remove("texto-branco");
                tt2.classList.add("texto-preto");
            }
            if (tt3) {
                tt3.classList.remove("texto-branco");
                tt3.classList.add("texto-preto");
            }



            if (imageCE) imageCE.src = "assets/images/soll.png";
            if (pav1) pav1.src = "assets/images/mapeamento_racks.png";
            if (pav2) pav2.src = "assets/images/mapeamento_racks_2.png";
            claro = true;
        }
        

        function modoEscuro() {
            if (mainDiagrama) {
                mainDiagrama.classList.add('background-preto');
                mainDiagrama.classList.remove('background-branco');
            }
            if (h1diagrama) {
                h1diagrama.classList.remove('texto-preto');
                h1diagrama.classList.add('texto-branco');
            }
            if (header) {
                header.classList.add("background-preto");
                header.classList.remove("background-branco");
            }
            if (body) {
                body.classList.remove("bgClaro");
                body.classList.add("bgEscuro");
            }

            if (txtdia) {
                txtdia.classList.add("texto-branco");
                txtdia.classList.remove("texto-preto");
            }

            if (txtpv1) {
                txtpv1.classList.add("texto-branco");
                txtpv1.classList.remove("texto-preto");
            }

            if (txtpv2) {
                txtpv2.classList.add("texto-branco");
                txtpv2.classList.remove("texto-preto");
            }
            if (asidetext) {
                asidetext.classList.add("texto-branco");
                asidetext.classList.remove("texto-preto");
            }
            if (tt1) {
                tt1.classList.add("texto-branco");
                tt1.classList.remove("texto-preto");
            }
            if (tt2) {
                tt2.classList.add("texto-branco");
                tt2.classList.remove("texto-preto");
            }
            if (tt3) {
                tt3.classList.add("texto-branco");
                tt3.classList.remove("texto-preto");
            }

            if (imageCE) imageCE.src = "assets/images/moon.png";
            if (pav1) pav1.src = "assets/images/mapeamento_racks_branco.png";
            if (pav2) pav2.src = "assets/images/mapeamento_racks_2_branco.png";
            claro = false;
        }
    }
});
