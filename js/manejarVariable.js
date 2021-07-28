var numero1 = -1;
var numero2 = -1;
var activoIgual = false;

var activoOperacion = false;
var tipoOperacion = '';

var operacionesRealizadas = [];

/**
 * Esta funcion permite validar que tipo de operacion quiero realizar y guardo el valor en la variable numero1
 * 
 * @param {string} tipoOperacion -> suma, resta, multiplicacion, division.
 */
function guardarNumero1(tipoOperacion){
    this.almacenarTipoOperacion = tipoOperacion;
    this.eliminarCaracterDisplay();

    if(this.numero1 == -1 && this.obtenerValorDisplay() != ''){
        this.numero1 = parseFloat(this.obtenerValorDisplay());
        this.definirTipoOperacion(this.almacenarTipoOperacion);
    }

    this.limpiarDisplay();
}

/**
 * Esta funcion almacena el valor del display en la variable numero2
 */
function guardarNumero2(){

    if(this.obtenerValorDisplay() != ''){
        this.numero2 = parseFloat(this.obtenerValorDisplay());
    }

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

    if(this.numero1 != -1 && this.numero2 && -1){
        let result = 0;

        switch(this.tipoOperacion){
            case '+':
                result = this.sumar(this.numero1,this.numero2);
                break;
            case '-':
                result = this.resta(this.numero1,this.numero2);
                break;
            case '*':
                result = this.multiplicacion(this.numero1,this.numero2);
                break;
            case '/':
                result = this.division(this.numero1,this.numero2);
                break;
            case '^':
                result = this.potencia(this.numero1,this.numero2);
                break;
        }
        
        if(result == NaN){
            alert(`Error variable con valor ${result}`);
        }else{
            this.mostrarDisplay(result);
        }

        this.guardarOperacion(this.numero1,this.numero2,this.tipoOperacion,result);
        this.numero1 = result;
    }
    
}

/**
 * Guarda la operacion que se esta realizando
 * @param {float} numero1 
 * @param {float} numero2 
 * @param {string} tipoOperacion 
 * @param {float} result 
 */
function guardarOperacion(num1,num2,tipoOp,result){
    this.operacionesRealizadas.push({numero1:num1,numero2:num2,tipoOperacion:tipoOp,resultado:result});
}

/**
 * Encargada de realizar el codigo html, y mostrar el historial de operaciones
 */
function imprimirOperaciones(){
    document.getElementById("historico").innerHTML = '';

    let ul = document.createElement("ul");

    this.operacionesRealizadas.forEach(element => {
        let li = document.createElement("li");
        li.innerText = `${element.numero1} ${element.tipoOperacion} ${element.numero2} = ${element.resultado}`;
        ul.appendChild(li);
    });

    document.getElementById("historico").appendChild(ul);
}