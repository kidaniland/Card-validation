# Validador de tarjetas de crédito

# Sobre el proyecto

La finalidad de esta práctica es construir una aplicación web que le permita al
usuario validar el número su tarjeta de crédito haciendo uso del algoritmo de Lunh. 
El objetivo se logrará implementando dos funciones, una para comprobar si el número 
ontenido por el input pertenece a una tarjeta real o falsa y otra para ocultar todos 
los dígitos de una tarjeta menos los últimos cuatro.

# Algoritmo de Luhn

Para generar el dígito de verificación empleando el algoritmo de Luhn se deben seguir 
estos pasos:
-En una secuencia de dígitos dada, el dígito de verificación será el último valor, 
que en principio se desconoce.
-Partiendo de esa última posición, se multiplica cada dígito de posición par (contando 
desde la derecha) por dos. Si el resultado es un número de dos dígitos, entonces se 
suman estos dos valores.
-Posteriormente, se suman todos los dígitos obtenidos.
-El dígito de verificación es el número que se obtiene como residuo después de dividir 
ese resultado entre 10 (que es lo que en matemáticas se denomina mod-10). En otras palabras, 
el dígito de verificación es el número que debe agregarse a este resultado para hacer el 
siguiente múltiplo de 10.
