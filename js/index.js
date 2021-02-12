foco = "unidades";
unidades.classList.add("foco")
maxValue = 9;

function pressEnter() {
    location.href="himno/"+centenas.innerText+decenas.innerText+unidades.innerText+".html";
}

function pressUp() {
    sumar1(eval(foco),maxValue);
    if (centenas.innerText == "7"){
        decenas.innerText > 0 ? decenas.innerText = "0" : "";
        unidades.innerText > 6 ? unidades.innerText = "6" : "";
    }
}

function pressDown() {
    restar1(eval(foco));
}

function pressLeft(){
    switch(foco){
        case "unidades":
            eval(foco).classList.remove("foco");
            foco = "decenas";
            decenas.classList.add("foco");
        break
        case "decenas":
            decenas.classList.remove("foco");
            foco = "centenas";
            maxValue=7;
            centenas.classList.add("foco");
        break
    }
}

function pressRight(){
    switch(foco){
        case "decenas":
            decenas.classList.remove("foco");
            foco = "unidades";
            centenas.innerText == "7" ? maxValue = 6 : maxValue = 9;
            unidades.classList.add("foco");
            break
        case "centenas":
            centenas.classList.remove("foco");
            foco = "decenas";
            centenas.innerText == "7" ? maxValue = 0 : maxValue = 9;
            decenas.classList.add("foco");
            break

    }
}