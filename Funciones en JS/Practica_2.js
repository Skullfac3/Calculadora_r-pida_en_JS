// Calculadora 

const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

alert("¿Que operacion desea realizar?");
let operacion = prompt("1. Sumar, 2. Restar, 3. Multiplicar, 4. Dividir");

if (operacion == 1) {
    let num1 = prompt("Ingrese el primer numero");
    let num2 = prompt("Ingrese el segundo numero");
    alert(`El resultado de la suma es: ${sumar(num1, num2)}`);
}
else if (operacion == 2) {
    let num1 = prompt("Ingrese el primer numero");
    let num2 = prompt("Ingrese el segundo numero");
    alert(`El resultado de la resta es: ${restar(num1, num2)}`);
}
else if (operacion == 3) {
    let num1 = prompt("Ingrese el primer numero");
    let num2 = prompt("Ingrese el segundo numero");
    alert(`El resultado de la multiplicacion es: ${multiplicar(num1, num2)}`);
}
else if (operacion == 4) {
    let num1 = prompt("Ingrese el primer numero");
    let num2 = prompt("Ingrese el segundo numero");
    alert(`El resultado de la division es: ${dividir(num1, num2)}`);
}
else {
    alert("Operacion no valida");
}

