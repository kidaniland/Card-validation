import validator from './validator.js';

console.log(validator);

//ELEMENTOS DE HTML
const linkHeader = document.querySelectorAll(".header a");
const inputCardNumber = document.getElementById('inputNumber');
const bValidate = document.getElementById('btn-validate');
const sectionRespuesta = document.getElementById('respuesta');
const spanFalseTrue = document.getElementById('FalseTrue');

//DEZPLAZAMIENTO DESDE HEADER
for (const link of linkHeader){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = this.getAttribute("href"); //puede ser contenido o card
        const offsetTop = document.querySelector(href).offsetTop;
        //console.log("MIRAAA LA DISTANCIA>>>",offsetTop);
      
        scroll({
          top: offsetTop,
          behavior: "smooth"
        });
        console.log(">>>", href);
    })
}

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
//CONDICION TODOS LOS DíGITOS
    if(creditCardNumber.length < 16){
        alert("ERROR: debes ingresar los 16 dígitos de tu tarjeta");
    }
//CONDICION PARA MOSTRAR RESULTADOS
    if(validator.isValid(creditCardNumber)){
        sectionRespuesta.style.display = "block";
        let colorTrue = "TRUE";
        spanFalseTrue.innerHTML = "La tarjeta n°: "+validator.maskify(creditCardNumber)
        +" es "+colorTrue.fontcolor('green');
    }
    else{
        sectionRespuesta.style.display = "block";
        let colorFalse = "FALSE";
        spanFalseTrue.innerHTML = "La tarjeta n°: "+validator.maskify(creditCardNumber)
        +" es "+colorFalse.fontcolor('red');
    }
    inputCardNumber.value = "";
});

