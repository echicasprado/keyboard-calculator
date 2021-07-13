/**
 * Limpia el display
 */
function limpiarDisplay(){
    document.getElementById("display").value = '';
}

/**
 * Mostrar valor en el display HTML
 * @param {string} valor 
 */
function mostrarDisplay(valor){
    document.getElementById("display").value = valor;
}

/**
 * Esta funcion se encarga de eliminar la ultima entrada de teclado al display
 */
function eliminarCaracterDisplay(){
    let valorDisplay = document.getElementById("display").value;
    let arrayDisplay = Array.from(valorDisplay);
    
    arrayDisplay.pop();    
    valorDisplay = arrayDisplay.join('');

    this.mostrarDisplay(valorDisplay);
}

/**
 * Obtener valor actual del display
 * 
 * @returns string con valor de display
 */
function obtenerValorDisplay(){
    return document.getElementById("display").value;
}