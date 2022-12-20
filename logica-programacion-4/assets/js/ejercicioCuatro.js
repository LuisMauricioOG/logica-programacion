/* INTENTO CON EL DOM
function evaluarNum() {
    while(isNaN(numero) || numero == null || numero == "") {
    document.getElementById("resultado").innerHTML = "Favor de ingresar el dato de manera numérica, por favor.";
    }
}

//COMIENZA Calcular serie Fib
function serieFib(num){
    var num = document.getElementById('numero');
    if (num <= 1) {
        document.getElementById("resultado").innerHTML = 1;
    }if (num > 1) {
        document.getElementById("resultado").innerHTML =  fibonacci(num - 1) + fibonacci(num - 2);
    }
}
//TERMINA Calcular serie Fib
*/

//COMIENZA Solicitud del número
let nombre =  prompt('¿Cuál es tu nombre?');
let saludo = ('Hola ' + nombre + '. Hagamos una serie Fibonacci. Coloca un número positivo a continuación.');
alert(saludo);

let num =  Number(prompt('¡Comencemos! Coloca un número que sea mayor que cero (0):'));
    while(num < 0) {
        num = Number(prompt('Que sea mayor que cero, por favor. Coloca otro:'));
    }
    if(!isNaN(num)){
    alert('Por favor, abre la consola para poder ver el resultado.');
    }
    labelCancelLoops:while(isNaN(num) || num == null) {
    num = Number(prompt('Favor de ingresar el dato de manera numérica, mayor a cero (0), por favor.'));
        if(!isNaN(num)){
            alert('Por favor, abre la consola para poder ver el resultado.');
            break labelCancelLoops;
        }
    };
//NOTA: No funciona la condición num =="" si dejo el Number() or parseInt()   
//TERMINA Solicitud del número


//COMIENZA Cálculo de la serie Fib
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= num) {
    console.log(nextTerm);

        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
};
// NOTA: 
//TERMINA Cálculo de la serie Fib
