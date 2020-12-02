

const validator = {
   //METODOS ISVALID y MASKIFY
   /*validator.isValid(creditCardNumber);
   validator.maskify(creditCardNumber);*/

};

//retornar un BOOLEAN dependiendo si es válida o no la tarjeta
/*function isValid(number){
   console.log("esto llega en number>>>", number);
   let totalOdd = 0;
   let totalEven = 0;
   let add = 0;
   let a = 0;
   let b = 0;

   for (let i=0; i<number.length; i+=2){
      totalOdd = parseInt(number[i])*2;
      console.log("IMPARES", totalOdd);
      if(totalOdd >9){
         let double = (totalOdd % 10)+1;
         a+=double;
         console.log("AAAA>>>", a);
      }
      else{
         b += totalOdd;
         console.log("BBBBB>>>",b);
      }
      totalOdd = a+b;
   } 
   console.log("Total IMPARES", totalOdd);

   for (let i=1; i<number.length; i+=2){
      totalEven += parseInt(number[i]); 
   }
   console.log("TOTAL PAR", totalEven);

   add = totalEven+totalOdd;
   console.log("SUMA DE TODO", add);

   if(add % 10 ===0){
      return true;
   }
   else{
      return false;
   }
}*/

//retorna String donde todos menos los últmos 4 dígitos serán un #
function maskify(cardN){
   console.log("llega a MASKIFY", cardN);
   let string = "";
   let numReplace = "#";
   let cantDigits = 0;
   for (let i=0; i<cardN.length; i++){
      cantDigits++
      if(cantDigits < 13){
         string += numReplace;
      }
      else{
         string += cardN[i];
      }
   }
   console.log("STRING CON CAMBIO>>", string);
   // return string
}

//PRUEBA EN CONSOLA
let num = "5592022120486706"
//isValid(num);
maskify(num);


export default validator;
