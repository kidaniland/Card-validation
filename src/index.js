import validator from './validator.js';

console.log(validator);

//ELEMENTOS DE HTML
const inputCardNumber = document.getElementById('inputNumber');
const bValidate = document.getElementById('btn-validate');
const sectionCard = document.getElementById('card');
const divFalse = document.getElementById('wrong');
const divTrue = document.getElementById('correct');

/*//EVENTO DEL TECLADO
let replaceNumber = document.getElementById('inputNumber');
replaceNumber.addEventListener('keyup', function(e){
    let valueInput = e.target.value; //valor de lo tecleado en el input recibido mediante el evento
    console.log("VALUE INPUt", valueInput);
    arrayNumber.push(valueInput);
    if(valueInput.length < 13){
        inputCardNumber.value = valueInput.replace(/\d/g, '*');
    }
    else{
        valueInput = e.target.value;
    }
    console.log("ARRAY>>",arrayNumber);
})*/

//EVENTO BOTON VALIDAR
bValidate.addEventListener('click', function(){
    let creditCardNumber = inputCardNumber.value;
    console.log("BOTON", cardNumber);
    validator.isValid(creditCardNumber);
    validator.maskify(creditCardNumber);
//CONDICION PARA MOSTRAR RESULTADOS
    if(isValid(creditCardNumber)){
        sectionCard.style.display = "block";
        divTrue.style.display = "block";
    }
    else{
        sectionCard.style.display = "block";
        divFalse.style.display = "block";
    }
})

