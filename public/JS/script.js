document.addEventListener("DOMContentLoaded", () => {
    // Constantes para selecionar elementos
    const body = document.querySelector("#body");
    const btnColor = document.querySelector("#btnColor");
    const btnSwitch = document.querySelector("#btnSwitch");
    const imageCE = document.querySelector("#CE");
    const header = document.querySelector("header");
    const h1diagrama = document.querySelector("#h1diagrama");
    const mainDiagrama = document.querySelector("#mainDiagrama");
    const pav1 = document.querySelector("#pav1");
    const pExterna = document.querySelector("#pExterna");
    const tExterna = document.querySelector("#tExterna");
    const pInterna = document.querySelector("#pInterna");
    const tInterna = document.querySelector("#tInterna");
    const pav2 = document.querySelector("#pav2");
    const txtdia = document.querySelector("#txtdia"),txtdia2 = document.querySelector("#txtdia2"), txtpv1= document.querySelector("#txtpv1"), txtpv2 = document.querySelector("#txtpv2"), asidetext = document.querySelector("#asidetext"), tt1 = document.querySelector("#tt1"), tt2 = document.querySelector("#tt2"), tt3 = document.querySelector("#tt3"), tt1emeio = document.querySelector("#tt1emeio")
    
    // Verifique se todos os elementos necessários existem antes de adicionar eventos
    if (btnColor && header && body) {
        let claro = loadTheme(); // Carregar o tema do Local Storage

        // Aplicar o tema carregado
        if (!claro) {
            modoEscuro();
        } else {
            modoClaro();
        }

        // Evento que chama as funções de modo claro ou escuro
        btnColor.addEventListener("click", () => {
            if (claro) {
                modoEscuro();
            } else {
                modoClaro();
            }
            saveTheme(claro); // Salvar o tema no Local Storage
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
            if (txtdia2) {
                txtdia2.classList.remove("texto-branco");
                txtdia2.classList.add("texto-preto");
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
            if (tt1emeio) {
                tt1emeio.classList.remove("texto-branco");
                tt1emeio.classList.add("texto-preto");
            }
            if (tt2) {
                tt2.classList.remove("texto-branco");
                tt2.classList.add("texto-preto");
            }
            if (tt3) {
                tt3.classList.remove("texto-branco");
                tt3.classList.add("texto-preto");
            }
            if (pExterna) {
                pExterna.classList.remove("texto-branco");
                pExterna.classList.add("texto-preto");
            }
            if (tExterna) {
                tExterna.classList.remove("texto-branco");
                tExterna.classList.add("texto-preto");
            }
            if (pInterna) {
                pInterna.classList.remove("texto-branco");
                pInterna.classList.add("texto-preto");
            }
            if (tInterna) {
                tInterna.classList.remove("texto-branco");
                tInterna.classList.add("texto-preto");
            }

            if (imageCE) imageCE.src = "/images/soll.png";
            if (pav1) pav1.src = "/images/mapeamento_racks.png";
            if (pav2) pav2.src = "/images/mapeamento_racks_2.png";
            claro = true;
            saveTheme(claro); // Salvar o tema no Local Storage
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

            if (txtdia2) {
                txtdia2.classList.add("texto-branco");
                txtdia2.classList.remove("texto-preto");
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
            if (tt1emeio) {
                tt1emeio.classList.add("texto-branco");
                tt1emeio.classList.remove("texto-preto");
            }
            if (tt2) {
                tt2.classList.add("texto-branco");
                tt2.classList.remove("texto-preto");
            }
            if (tt3) {
                tt3.classList.add("texto-branco");
                tt3.classList.remove("texto-preto");
            }

            if (pExterna) {
                pExterna.classList.add("texto-branco");
                pExterna.classList.remove("texto-preto");
            }
            if (tExterna) {
                tExterna.classList.add("texto-branco");
                tExterna.classList.remove("texto-preto");
            }

            if (pInterna) {
                pInterna.classList.add("texto-branco");
                pInterna.classList.remove("texto-preto");
            }
            if (tInterna) {
                tInterna.classList.add("texto-branco");
                tInterna.classList.remove("texto-preto");
            }

            if (imageCE) imageCE.src = "/images/moon.png";
            if (pav1) pav1.src = "/images/mapeamento_racks_branco.png";
            if (pav2) pav2.src = "/images/mapeamento_racks_2_branco.png";
            claro = false;
            saveTheme(claro); // Salvar o tema no Local Storage
        }

        function saveTheme(isClaro) {
            localStorage.setItem('theme', isClaro ? 'claro' : 'escuro');
        }

        function loadTheme() {
            const theme = localStorage.getItem('theme');
            return theme === 'escuro' ? false : true;
        }
    }

});
