var texto_inserido = document.getElementById("texto_inserido");

texto_inserido.style.fontSize = "20pt";

var texto = 20;

function operacao(nome_operacao , inf , inf2 , inf3 , inf4){

    switch (nome_operacao){

        case "alinhamento":
            texto_inserido.style.textAlign = inf;
            break;

        case "cordefundo":
            texto_inserido.style.backgroundColor = document.getElementById("btn_colour_backg").value;
            break;

        case "corTexto":
            texto_inserido.style.color = document.getElementById("btn_colour_text").value;
            break;

        case "maior":
            texto = texto + 4;
            console.log(texto)
            texto_inserido.style.fontSize = texto + inf ;
            break;

        case "menor":
            texto = texto - 4;
            console.log(texto)
            texto_inserido.style.fontSize = texto + inf ;
            break;

        case "limpar":
            texto_inserido.value = inf;
            break;

        case "reset":
            texto_inserido.style.textAlign = inf;
            texto_inserido.style.backgroundColor = inf2;
            texto_inserido.style.color = inf3;
            texto_inserido.style.fontSize = inf4;
            break;

        case "d1":
            texto_inserido.style.textAlign = inf;
            texto_inserido.style.color = inf2;
            texto_inserido.style.fontSize = inf3;
            break;

        case "d2":
            texto_inserido.style.textAlign = inf;
            texto_inserido.style.color = inf2;
            texto_inserido.style.fontSize = inf3;
            break;

        default:
            break;
    }

}

document.getElementById("btn_align_l").onclick = function (){
    operacao("alinhamento", "left")
}

document.getElementById("btn_align_c").onclick = function (){
    operacao("alinhamento", "center")
}

document.getElementById("btn_align_r").onclick = function (){
    operacao("alinhamento", "right")
}

document.getElementById("btn_colour_backg").onclick = function (){
    operacao("cordefundo", )

}

document.getElementById("btn_colour_text").onclick = function(){
     operacao("corTexto" )
}

document.getElementById("btn_font_plus").onclick = function () {
    operacao("maior" , "pt")
}

document.getElementById("btn_font_minus").onclick = function () {
    operacao("menor" , "pt")
}

document.getElementById("btn_text_remove").onclick = function () {
    operacao("limpar" , "")
}

document.getElementById("reset").onclick = function () {
    operacao("reset" , "left" , "white" , "black" , "20pt" )
}

document.getElementById("templates").innerHTML += '<button id="default1">Botão</button>' + '<button id="default2">Botão</button>';

document.getElementById("default1").onclick = function () {
    operacao("d1" , "left" , "cadetblue" , "22pt")
}

document.getElementById("default2").onclick = function () {
    operacao("d2" , "right" , "crimson" , "28pt")
}






