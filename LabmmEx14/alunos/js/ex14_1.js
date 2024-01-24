var texto_inserido = document.getElementById("texto_inserido");

texto_inserido.style.fontSize = "20pt";

var texto = 20;

function operacao(nome_operacao,inf){

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