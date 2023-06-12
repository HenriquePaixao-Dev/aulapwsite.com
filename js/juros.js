function juros(){
    v = (document.getElementById("caixa-valor").value);
    p = (document.getElementById("caixa-parcela").value);
    t = (document.getElementById("caixa-taxa").value);
    resul = document.getElementById("resul");
    divi = v * (1 + t/100) ** p;

        resul.textContent = "" + divi.toFixed(2)
 

}



function inputNumero(evento){

    var caracter = String.fromCharCode(evento.which);
    if(!(/[0-9.]/.test(caracter))){
            evento.preventDefault();
    }


}