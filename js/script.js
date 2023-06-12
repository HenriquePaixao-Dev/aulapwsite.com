

function divisao(){
    g = (document.getElementById("caixa-gasolina").value);
    e = (document.getElementById("caixa-etanol").value);
    inv = document.getElementById("inv");
    divi = e / g;
    if(divi <= 0.74){
        
        inv.textContent = "Use Etanol"
    } 
    else if (divi > 0) {
        
        inv.textContent = "Use Gasolina"
    }
}

function inputNumero(event){

    var caracter = String.fromCharCode(event.which);
    if(!(/[0-9.]/.test(caracter))){
            event.preventDefault();
    }


}

function tema(){
    let t = document.querySelector("body");

    var img = document.getElementById("imgtema").src;
        if (img.indexOf('lua.png')!=-1){
            document.getElementById("imgtema").src = "img/sol.png"
        }
        else{
            document.getElementById("imgtema").src = "img/lua.png"
        }
    
        t.classList.toggle("dark")

    


}