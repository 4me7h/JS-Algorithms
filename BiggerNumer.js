
// programa que pida dos números y que nos diga cual es mayor, el menor o si es igual
var inputNumber01 = prompt("ingresa el primer número");
var inputNumber02 = prompt("ingresa el segundo número");

function numbers(number01, number02) {
    if(number01 > number02) {
        return console.log('el primer número es mayor');
    } else if( number02 > number01) {
        return console.log('el segundo número es mayor');
    } else {
        return console.log('los números son iguales');
    }
}
console.log(inputNumber01 + ' ' + inputNumber02);

numbers(inputNumber01, inputNumber02);
