/**
 * Obtener codigo de tecla presionada
 * @param {*} key 
 */
function getKeyCode(key){
    switch(key.keyCode){
        case 187: //suma
            this.guardarNumero1('suma');
            break;
        case 189: //resta
            this.guardarNumero1('resta');
            break;
        case 56: //multiplicacion
            this.guardarNumero1('mulplicacion');
            break;
        case 191: //division
            this.guardarNumero1('division');
            break;
        case 54: //potencia
            this.guardarNumero1('potencia');
            break;
        case 13: //igual
            this.generarResultado();
            break;
        case 8://restar un numero
            break;
        default://validar numero
            this.validarNumero(key);
            break;
    }
}

/**
 * Esta funcion solo valida que el key sea un numero valido y lo muestra en el display
 * 
 * @param {string} key 
 */
function validarNumero(key){  
    if(key.keyCode >= 65 && key.keyCode <= 90){
        alert(`No se permite valores, no numericos.\n Valor ingresado: ${key.key}`);
        this.eliminarCaracterDisplay();
    }
}

window.addEventListener("keyup", getKeyCode,false);