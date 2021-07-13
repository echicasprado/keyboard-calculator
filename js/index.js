var numero1 = "";
var numero2 = "";
var activoIgual = false;
var activoOperacion = false;

function getKeyCode(key){
    switch(key.keyCode){
        case 187: //suma
            alert("suma");
            break;
        case 189: //resta
            alert("resta");
            break;
        case 56: //multiplicacion
            alert("multiplicacion");
            break;
        case 191: //division
            alert("division");
            break;
        case 13: //igual
            alert("igual");
            break;
        case 8://restar un numero
            alert("restar un numero a al display")
            break;
        default://validar numero
            // alert("tengo que validar numero el rango es de 48 al 57");
            validarNumero(key);
            break;
    }
}

function validarNumero(key){
    if(activoOperacion){
        numero2 += key.key;
        document.getElementById("display").value = numero2;
    }else{
        numero1 += key.key;
        document.getElementById("display").value = numero1;
    }
}


window.addEventListener("keydown", getKeyCode,false);