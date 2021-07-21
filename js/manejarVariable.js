var numero1 = -1;
var numero2 = -1;
var activoIgual = false;

var activoOperacion = false;
var tipoOperacion = '';

/**
 * Esta funcion permite validar que tipo de operacion quiero realizar y guardo el valor en la variable numero1
 * 
 * @param {string} tipoOperacion -> suma, resta, multiplicacion, division.
 */
function guardarNumero1(tipoOperacion){
    this.definirTipoOperacion(tipoOperacion);
    this.eliminarCaracterDisplay();

    if(this.numero1 == -1){
        this.numero1 = parseFloat(this.obtenerValorDisplay());
    }

    this.limpiarDisplay();
}

/**
 * Esta funcion almacena el valor del display en la variable numero2
 */
function guardarNumero2(){
    this.numero2 = parseFloat(this.obtenerValorDisplay());
    this.limpiarDisplay();
}

/**
 * Function activa el realizar una operacion y guarda el tipo de operacion a realizar
 * 
 * @param {string} tipoOperacion 
 */
function definirTipoOperacion(tipoOperacion){
    this.activoOperacion = true;
    this.tipoOperacion = tipoOperacion;
}

/**
 * Funcion limpia tipo de operacion y espera la siguiente operacion a realizar.
 */
function limpiarTipoOperacion(){
    this.activoOperacion = false;
    this.tipoOperacion = '';
}

/**
 * Genera el resultado y lo muestra en el display
 */
function generarResultado(){
    this.guardarNumero2();

    if(guardarNumero1){
        switch(this.tipoOperacion){
            case 'suma':
                this.numero1 = this.sumar(this.numero1,this.numero2);
                break;
            case 'resta':
                this.numero1 = this.resta(this.numero1,this.numero2);
                break;
            case 'mulplicacion':
                this.numero1 = this.multiplicacion(this.numero1,this.numero2);
                break;
            case 'division':
                this.numero1 = this.division(this.numero1,this.numero2);
                break;
            case 'potencia':
                this.numero1 = this.potencia(this.numero1,this.numero2);
                break;
        }
        
        if(this.numero1 == NaN){
            alert(`Error variable con valor ${this.numero1}`);
        }else{
            this.mostrarDisplay(this.numero1);
        }

    }
    
}