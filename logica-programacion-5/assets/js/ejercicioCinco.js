//COMIENZA Solicitar número secreto
let nombre =  prompt('¿Cuál es tu nombre?');
let saludo = ('Hola ' + nombre + '. Te quiero retar a adivinar el número secreto. El cual se encuentra entre 1 y 100.');
alert(saludo);
//El número secreto escogido es:
let numSecreto = 71;
//Pedir número, si no es el numSecreto, pedirlo nuevamente hasta que se cumpla. Pero tener en cuenta que se tienen que ir guardando TOOODOOOOS los números que se añadan hasta lograr adivinarlo.
let num =  parseInt(prompt('Entonces, ' + nombre + ', ¿cuál crees que es el número secreto? Colócalo aquí:'));
//Requiero verificar que es un número el que se colocó
    while(num <= 0 || num > 100){
        num = Number(prompt('Creo que se te pasó por desapercibida una instrucción... Recuerda que es solo del 1 al 100. ¡Vuelve a ingresar un número!'));
    };
    labelCancelLoops:while(isNaN(num)|| num == null || num == "") { //el num == "" lo contempla como 0 y lo evalúa en la sig. condición
    num = prompt('Favor de ingresar el dato de manera numérica, por favor.');
        while(num <= 0 || num > 100){
            num = Number(prompt('Creo que se te pasó por desapercibida una instrucción... Recuerda que es solo del 1 al 100. ¡Vuelve a ingresar un número!'));
        };
        while(num >= 1 && num <= 100 && num !== numSecreto){
            num = Number(prompt('Lo siento, ese no era el número secreto. Vuelve a intentarlo...'));
        }
        if(num === numSecreto){
            alert('¡FELICIDADES! Lo has logrado. Ahora te invito a revisar cuáles fueron los números previos con los que intentaste adivinar. Revisa la consola.')
            break labelCancelLoops;
        }
    };
   

//Requiero guardar TOOOODOOOOS los valores y juntarlos en un array
function adivinar(){
    var numerosLista = []; 
    numerosLista.push(num); 
    var numPrevios = numerosLista.join( ', ' ); 
    console.log('Los números que utilizaste, fueron: ' + numPrevios + '.');
};
adivinar();
//Requiero imprimir los valores que fueron utilizados, hasta que se logró obtener el 71, en la consola

//TERMINA Solicitar número secreto

/* Creación de número aleatorio entre 1 y 100:
function numAleatorio() {
    var aleatorio = Math.round(Math.random()*100);
} */

