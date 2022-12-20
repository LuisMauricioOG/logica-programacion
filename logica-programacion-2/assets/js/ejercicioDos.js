//COMIENZA Solicitud de la temperatura desde el prompt
let nombre =  prompt('¿Cuál es tu nombre?');
let saludo = ('Hola ' + nombre + '. ¿Cuál es la temperatura en grados Celcius (°C) en tu ciudad? Te quiero mostrar la temperatura de tu ciudad en otras unidades de medida. Requiero que la coloques a continuación.');
alert(saludo);

let temp =  Number(prompt('¡Comencemos! Coloca la temperatura de tu ciudad (°C):'));
if(!isNaN(temp)){
    alert('Por favor, abre la consola para poder ver el resultado.');
}
labelCancelLoops:while(isNaN(temp)|| temp == null || temp == "") {
   temp = prompt('Favor de ingresar el dato de manera numérica, por favor.');
    if(!isNaN(temp)){
        alert('Por favor, abre la consola para poder ver el resultado.');
        break labelCancelLoops;
    }
};
//NOTA: No funciona la condición temp =="" si dejo el Number() or parseInt()    
//TERMINA Solicitud de la temperatura desde el prompt


//COMIENZA Conversión de unidades a grados Fahrenheit y Kelvin
function convFahr(){
    var gradFahr = temp * 1.8 + 32;
    var mensaje1 = 'La temperatura de tu ciudad' + ' (' + temp + '°C) ' + 'en grados Fahrenheit es: ' +  gradFahr + ' °F.';
    console.log(mensaje1);
}
convFahr();

function convKelvin(){
    let gradKelvin = temp + 273.15;
    var mensaje2 = 'La temperatura de tu ciudad' + ' (' + temp + '°C) ' + 'en grados Kelvin es: ' +  gradKelvin + ' K.';
    console.log(mensaje2);
}
convKelvin();
//TERMINA Conversión de unidades a grados Fahrenheit y Kelvin