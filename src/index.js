import validator from './validator.js';

console.log(validator);

//ELEMENTOS DE HTML
const inputCardNumber = document.getElementById('inputNumber');
const bValidate = document.getElementById('btn-validate');
const sectionRespuesta = document.getElementById('respuesta');
const spanFalseTrue = document.getElementById('FalseTrue');


//EVENTO DEL TECLADO NO LETRAS
let noLetter = document.getElementById('inputNumber');
noLetter.addEventListener('keyup', function(e){
    let valueInput = e.target.value; //target es valor de lo tecleado en el input recibido mediante el evento
    //console.log("VALUE INPUt", valueInput);
    noLetter.value = valueInput.replace(/\D/g, '');
})

//EVENTO BOTON VALIDAR
bValidate.addEventListener('click', function(){
    let creditCardNumber = inputCardNumber.value;
    console.log("BOTON", creditCardNumber);
    
    //validator.isValid(creditCardNumber);
    //validator.maskify(creditCardNumber);

//CONDICION PARA MOSTRAR RESULTADOS
    if(validator.isValid(creditCardNumber)){
        sectionRespuesta.style.display = "block";
        spanFalseTrue.textContent = "La tarjeta: "+validator.maskify(creditCardNumber)+" es TRUE.";
    }
    else{
        sectionRespuesta.style.display = "block";
        spanFalseTrue.textContent = "La tarjeta: "+validator.maskify(creditCardNumber)+" es FALSE.";
    }
});

