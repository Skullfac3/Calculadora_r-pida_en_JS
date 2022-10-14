/* function saludar(){
    respuesta = prompt ("Hola Erick, ¿Como fue tu día");
    if (respuesta == "bien"){
        alert ("Me alegro");
    }else{
        alert ("Que mal");
    }
}

saludar();
saludar(); */

// Funciones con return

// Ejemplo 1

/* function saludar(){
    return "Hola Erick" + "<br>";
}

let saludo = saludar();
document.write(saludo);

// Ejemplo 2

function suma(){
    let num1 = 5;
    let num2 = 10;
    return num1 + num2; 
}

let resultado = suma();
document.write(resultado + "<br>"); 

// Ejemplo 3

function numero_par(){
    let num = 4;
    if (num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

let resulta2 = numero_par();
document.write(resulta2 + "<br>");

// Ejemplo 4

function comparacion(){
    let num1 = 10;
    let num2 = 20;
    if (num1 > num2){
        return "El numero 1 es mayor";
    }else{
        return "El numero 2 es mayor";
    }
}

let resulta3 = comparacion();
document.write(resulta3 + "<br>"); */

// Funciones con parametros

/* // Ejemplo 1

function suma(num1, num2){
    let res = num1 + num2;
    return res;
}

let resultado = suma(10, 20);
document.write(resultado + "<br>");

// Ejemplo 2

function comparacion(num1, num2){
    if (num1 > num2){
        return "El numero 1 es mayor";
    }else{
        return "El numero 2 es mayor";
    }
}

let resulta2 = comparacion(10, 20);
document.write(resulta2 + "<br>");

// Ejemplo 3

function numero_par(num){
    if (num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

let resulta3 = numero_par(4);
document.write(resulta3 + "<br>");

// Ejemplo 4

function saludar(nombre){
    let saludo = "Hola " + nombre;
    return saludo;
}

let saludo = saludar("Erick");
document.write(saludo); */

// Funciones con arrows function

// Ejemplo 1

// Sintaxis de las arrow function

//variable + nombre de la funcion + parametros + signo de igual + signo de flecha + codigo a ejecutar
/* const saludar = (nombre) => {
    document.write("Hola como estas? " + nombre + "<br>");
}

saludar("Erick");

// Ejemplo 2

const suma = (num1, num2) => {
    let res = num1 + num2;
    return res;
}

let resultado = suma(10, 20);
document.write(resultado + "<br>");

// Ejemplo 3

const comparacion = (num1, num2) => {
    if (num1 > num2){
        return "El numero 1 es mayor";
    }else{
        return "El numero 2 es mayor";
    }
}

let resulta2 = comparacion(10, 20);
document.write(resulta2 + "<br>");

// Ejemplo 4

const numero_par = (num) => {
    if (num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

let resulta3 = numero_par(4);
document.write(resulta3 + "<br>");

// Ejemplo 5

const salu2 = (nombre) => {
    let saludo = "Hola " + nombre;
    return saludo;
} */
