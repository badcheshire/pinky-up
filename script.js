// ===========================
// CONTROLE DE TAMANHO DA FONTE
// ===========================

let tamanhoFonte = 100;

const aumentarFonte = document.getElementById("aumentar-fonte");
const diminuirFonte = document.getElementById("diminuir-fonte");


if(aumentarFonte){

    aumentarFonte.addEventListener("click", function(){

        if(tamanhoFonte < 140){

            tamanhoFonte += 10;

            document.body.style.fontSize = tamanhoFonte + "%";

        }

    });

}


if(diminuirFonte){

    diminuirFonte.addEventListener("click", function(){

        if(tamanhoFonte > 80){

            tamanhoFonte -= 10;

            document.body.style.fontSize = tamanhoFonte + "%";

        }

    });

}



// ===========================
// MODO ALTO CONTRASTE
// ===========================


const botaoContraste = document.getElementById("contraste");


if(botaoContraste){

    botaoContraste.addEventListener("click", function(){

        document.body.classList.toggle("alto-contraste");

    });

}



// ===========================
// BOTÃO VOLTAR AO TOPO
// ===========================


const voltarTopo = document.createElement("button");


voltarTopo.innerHTML = "Voltar ao topo";


voltarTopo.classList.add("voltar-topo");


document.body.appendChild(voltarTopo);



window.addEventListener("scroll", function(){

    if(window.scrollY > 400){

        voltarTopo.style.display = "block";

    }else{

        voltarTopo.style.display = "none";

    }

});



voltarTopo.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



// ===========================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===========================


const elementos = document.querySelectorAll(
    ".card, .recurso, .cta"
);


function mostrarElementos(){


    elementos.forEach(function(elemento){


        const posicao = elemento.getBoundingClientRect().top;


        const alturaTela = window.innerHeight;


        if(posicao < alturaTela - 100){

            elemento.classList.add("mostrar");

        }


    });


}


window.addEventListener(
    "scroll",
    mostrarElementos
);


mostrarElementos();



// ===========================
// FORMULÁRIO
// ===========================


const formulario = document.querySelector("form");


if(formulario){

    formulario.addEventListener("submit", function(event){


        event.preventDefault();


        alert(
            "Mensagem enviada com sucesso. Obrigado pelo contato!"
        );


        formulario.reset();


    });

}