import validator from './validator.js';

console.log(validator);

//UBICANDO POR ID LOS ELEMENTOS DE NUESTRA PANTALLA
let cardNumber;
let formulario = document.getElementById('formularioTarjeta');
let bValidar = document.getElementById('botonValidar');
let rWrong = document.getElementById('wrong');
let rCorrect = document.getElementById('correct');

//ASEGURARSE QUE LOS VALORES INGRESADOS SEAN SOLO NUMEROS
const validateKeyup = (e) => {
    let numeroTarjeta = e.target.value;//el target nos lo dios la consola cuando activamos el evento reconoció que lo presionado era un número y ahora solo guardamos ese valor en la variable.
    formulario.cardNumber.value = numeroTarjeta //continua en .replace()
        //Eliminando espacios en blanco con el método replace
        .replace(/\s/g, '')
        //Eliminando las letras y las reemplace por nada...asi se borran solas si por error las colocan
        .replace(/\D/g, '')
        //Poniendo espacio cada 4 numeros
        .replace(/([0-9]{4})/g, '$1 ')//busca numeros del 0 al 9 y agrupalo cada 4 digitos, $1 agrega espacio
        //Metodo trimp quita el último espacio de una cadena de texto
        .trim();
    //METIENDO EL VALOR DEL IMPUT EN UNA VARIABLE
    cardNumber = numeroTarjeta;
}

formulario.cardNumber.addEventListener('keyup', validateKeyup)

bValidar.addEventListener('click', () =>{
    formulario.value = cardNumber;
    console.log ('yujuu --> ' + typeof parseInt(cardNumber));
})



//CONDICION PARA MOSTRAR EN PANTALLA SI TARJETA ES FALSA O REAL
