//COMIENZA Solicitud de valores desde el prompt
let nombre =  prompt('¿Cuál es tu nombre?');
let saludo = ('Hola ' + nombre + '. Hoy haremos un ejercicio. Requiero que pienses en tres (3) números y los coloques a continuación.');
alert(saludo);
let valor1 =  parseInt(prompt('¡Comencemos! Coloca el primer valor numérico:'));
let valor2 =  parseInt(prompt('Ahora, coloca el segundo valor numérico:'));
let valor3 =  parseInt(prompt('Por último, coloca el tercer valor numérico:'));
let ver = ('Bueno, ahora es mi turno de analizar los números que colocaste. Por favor, abre la consola para poder ver el resultado.');
alert(ver);
//TERMINA Solicitud de valores desde el prompt


/* INICIA Comparación */
function comparacion(){
    if(valor1 == valor2 && valor1 == valor3){
        console.log('Todos los valores que ingresaste son IGUALES. ¿Cierto? ' + 'Entonces, no hay menor ni mayor.');
    }
    if(valor1 == valor2 || valor1 == valor3 || valor2 == valor3){
        console.log('Dos valores se repiten. ¿Cuáles son los mayores y cuál el menor? ¿O viceversa? ' + '🧐');
    }
        else{
        console.log('Los valores que ingresaste son DIFERENTES. ¿Cuál es el mayor, cuál el del centro y cuál el menor?');}
    }
comparacion();

/* TERMINA Comparación */


/* INICIA análisis para el NÚMERO MAYOR */
function numMayor(){
    /* Número mayor */
    if(valor1 > valor2 && valor1 > valor3){
        console.log('El primer valor que colocaste es el mayor '+ '(' + valor1 + ')' + '.');
    } 
    if(valor2 > valor1 && valor2 > valor3){
        console.log('El segundo valor que colocaste es el mayor '+ '(' + valor2 + ')' + '.');
    }
    if(valor3 > valor1 && valor3 > valor2){
        console.log('El tercer valor que colocaste es el mayor '+ '(' + valor3 + ')' + '.');
    }
     /* Si dos números son iguales */
     if(valor1 == valor2 && valor1 > valor3){
        console.log('El primer y el segundo valor son los mayores ' + '(' + valor1 + ')' + '.' + ' Por lo tanto, no hay valor central.');
    }
    if(valor1 == valor3 && valor1 > valor2){
        console.log('El primer y el tercer valor son los mayores ' + '(' + valor1 + ')' + '.' + ' Por lo tanto, no hay valor central.');
    }
    if(valor2 == valor3 && valor2 > valor1){
        console.log('El segundo y el tercer valor son los mayores ' + '(' + valor3 + ')' + '.' + ' Por lo tanto, no hay valor central.');
    }    
    }
numMayor();
/* TERMINA análisis para el NÚMERO MAYOR */


/* INICIA análisis para el NÚMERO CENTRAL */
function numCentro(){
    if(valor3 < valor1 && valor1 < valor2){
        console.log('El primer valor que colocaste es el del centro '+ '(' + valor1 + ')' + '.');
    }
    if(valor2 < valor1 && valor1 < valor3){
        console.log('El primer valor que colocaste es el del centro '+ '(' + valor1 + ')' + '.');
    }
    if(valor3 < valor2 && valor2< valor1){
        console.log('El segundo valor que colocaste es el del centro '+ '(' + valor2 + ')' + '.');
    }
    if(valor1 < valor2 && valor2< valor3){
        console.log('El segundo valor que colocaste es el del centro '+ '(' + valor2 + ')' + '.');
    }
    if(valor1 < valor3 && valor3< valor2){
        console.log('El tercer valor que colocaste es el del centro '+ '(' + valor3 + ')' + '.');
    }
    if(valor2 < valor3 && valor3< valor1){
        console.log('El tercer valor que colocaste es el del centro '+ '(' + valor3 + ')' + '.');
    }
}
numCentro();
/* TERMINA análisis para el NÚMERO CENTRAL */


/* INICIA análisis para el NÚMERO MENOR */
function numMenor(){
    /* Para un número menor */
    if(valor1 < valor2 && valor1 < valor3){
        console.log('El primer valor que colocaste es el menor '+ '(' + valor1 + ')' + '.');
    } 
    if(valor2 < valor1 && valor2 < valor3){
        console.log('El segundo valor que colocaste es el menor '+ '(' + valor2 + ')' + '.');
    }
    if(valor3 < valor1 && valor3 < valor2){
        console.log('El tercer valor que colocaste es el menor '+ '(' + valor3 + ')' + '.');
    }
        /* Para dos números repetidos, siendo los menores */
    if(valor1 == valor2 && valor3 > valor1){
        console.log('El primer y el segundo valor son los menores ' + '(' + valor1 + ')' + '.' + ' Por lo tanto, no hay valor central.');
    }
    if(valor1 == valor3 && valor2 > valor1){
        console.log('El primer y el tercer valor son los menores ' + '(' + valor1 + ')' + '.' + ' Por lo tanto, no hay valor central.');
    }
    if(valor2 == valor3 && valor1 > valor2){
        console.log('El segundo y el tercer valor son los menores ' + '(' + valor3 + ')' + '.' + ' Por lo tanto, no hay valor central.');
    }
}
numMenor();
/* TERMINA análisis para el NÚMERO CENTRAL */



