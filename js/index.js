/**
 * Obtener codigo de tecla presionada
 * @param {*} key 
 */
function getKeyCode(key){
    switch(key.key){
        case '+':
            this.guardarNumero1(key.key);
            break;
        case '-':
            this.guardarNumero1(key.key);
            break;
        case '*':
            this.guardarNumero1(key.key);
            break;
        case '/':
            this.guardarNumero1(key.key);
            break;
        case '^':
            this.guardarNumero1(key.key);
            break;
        case 'Enter':
            this.generarResultado();
            break;
        case 'Backspace':
            break;
        default:
            this.validarNumero(key);
            break;
    }
}

/**
 * Esta funcion solo valida que el key sea un numero valido
 * 
 * @param {string} key 
 */
function validarNumero(key){  
    switch(key.key){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
        case 'Shift':
            break;
        default:
            this.valorNoValido(key);
            break;
    }
}

/**
 * Elimina la entrada del display y muestra mensaje con el key no valido.
 * 
 * @param {key} key 
 */
function valorNoValido(key){
    alert(`No se permite valores, no numericos.\n Valor ingresado: ${key.key}`);
    this.eliminarCaracterDisplay();
}

window.addEventListener("keyup", getKeyCode,false);