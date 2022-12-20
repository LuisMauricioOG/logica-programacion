//COMIENZA Solicitud de la temperatura desde el prompt
let nombre =  prompt('¿Cuál es tu nombre?');
let saludo = ('Hola ' + nombre + '. Necesito calcular el factorial de un número cualquiera. Coloca el número de tu agrado a continuación.');
alert(saludo);

let fact =  Number(prompt('¡Comencemos! Coloca un número que sea mayor que cero (0):'));
    while(fact < 0) {
        fact = Number(prompt('Que no sea menor que cero, por favor. Coloca otro:'));
    }
    if(!isNaN(fact)){
    alert('Por favor, abre la consola para poder ver el resultado.');
    }
    labelCancelLoops:while(isNaN(fact)|| fact == null) {
    fact = Number(prompt('Favor de ingresar el dato de manera numérica, mayor a cero (0), por favor.'));
        if(!isNaN(fact)){
            alert('Por favor, abre la consola para poder ver el resultado.');
            break labelCancelLoops;
        }
    };
//NOTA: No funciona la condición fact =="" si dejo el Number() or parseInt()   
//TERMINA Solicitud de la temperatura desde el prompt


//COMIENZA Cálculo del FACTORIAL
function calcFactorial (){
    if (fact === 0 || fact === "" || fact === 1)
        var mensajeUno = 'El factorial del número dado es: 1.'
        console.log(mensajeUno);
    for (var i = fact - 1; i >= 1; i--) {
        fact = fact * i; 
    }
    var mensajeDos = 'El factorial del número dado es: ' + fact + '.';
    console.log(mensajeDos);
}
calcFactorial();
/* NOTA: Hay un problema cuando se intenta con CERO o no se coloca nada, ya que lanza correctamente la priemra condición, pero la segunda igual (de manera incorrecta) y ya no debería hacerlo*/
//TERMINA Cálculo del FACTORIAL
