// Lector del botón presionado
window.onkeydown=tecla;
function tecla(event){
    num = event.keyCode;
    // Acciones de fecha hacia arriba.
    if(num==38){
        pressUp();
    }
    //Acciones de flecha hacia abajo
    if(num==40){
        pressDown();
    }
    // Acciones al presionar enter
    if(num==13){
        pressEnter();
    }
    // Acciones al presionar la tecla derecha
    if(num==39){
        pressRight();
    }
    // Acciones al presionar la tecla izquierda
    if(num==37){
        pressLeft();
    }
}

function sumar1(element,maxValue){
    if (parseInt(element.innerText)!=maxValue){
        console.log(maxValue)
        element.innerText = parseInt(element.innerText)+1;
    }
}

function restar1(element){
    if (parseInt(element.innerText)>0){
        element.innerText = parseInt(element.innerText)-1;                     
    }
}