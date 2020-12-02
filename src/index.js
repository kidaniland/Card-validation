import validator from './validator.js';

console.log(validator);

//ELEMENTOS DE HTML
let inputCardNumber = document.getElementById('inputNumber');
const bValidate = document.getElementById('btn-validate');

//EVENTO BOTON VALIDAR
/*bValidate.addEventListener('click', function(){
    let cardNumber = inputCardNumber.value;
    console.log("BOTON", cardNumber);
    validator.isValid(creditCardNumber);
    validator.maskify(creditCardNumber);
})*/