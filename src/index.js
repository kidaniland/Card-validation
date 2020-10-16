import validator1 from './validator.js';

console.log(validator1);

//UBICANDO POR ID LOS ELEMENTOS DE NUESTRA PANTALLA
/* let wrong = document.getElementById('wrong');
let correct = document.getElementById('correct'); */
let validar = document.getElementById('botonV');

//ASEGURARSE DE RECIBIR SOLO VALORES NUMÉRICOS DEL INPUT
function soloNumeros (event) {
    key = event.keyCode || event.which;
    teclado = String.fromCharCode(key);
    numeros = '0123456789';
    especiales = [8-9-37-38-39-40-46]//ARRAY:8-blackSpace, 37-izqui, 38-derech, 46-suprimir 
    teclado_especial = false;
    //Ciclo para detectar las teclas especiales 
    for (var i in especiales){
        if (key == especiales[i]){
            teclado_especial = true; //si encuentras las teclas especiales, ejecutate...
        }
    }
    //verificando si un caracter especial está dentro de la cadena o q tecla esp sea falsa
    if (numeros.indexOf(teclado)==-1 && !teclado_especial){ 
        return false;
    }
}

//ACCEDER AL VALOR DEL IMPUT Y METERLOS EN UNA VARIABLE
let vNumber;
validar.addEventListener('click', function() {
    vNumber = document.getElementById('cardNumber').value;

    console.log('Akiii --> ' + vNumber);
    // correct.style.display = 'none';
    // wrong.style.display = 'none';
})

//CONDICION PARA MOSTRAR EN PANTALLA SI TARJETA ES FALSA O REAL
