// aqui van los scripts 

const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Good day Menchos";
} else {
    greeting = "Good evening";
}

document.getElementById("demo").innerHTML = greeting;

var hola = "hola dr mundo";
console.log(hola);

let nombre = "Roy";
let apellido = "Rojas";
//concatenacion
let saludo = "hola mi nombre es " + nombre + " " + apellido + ".";
console.log(saludo);

//interpolacion de variables
//template string
let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`;
console.log(saludo2);

let ul = "<ul><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ul>";

console.log(ul);

let ul2 = `
<<ul>
<li>Primavera</li>
<li>Verano</li>
<li>Otoño</li>
<li>Invierno</li>
</ul>
`;

console.log(ul2);

//funcion declarada

function belleza(){
console.log("uno");
console.log("dos");
console.log("tres");
}

function devolucion(){
    console.log("jovenes");

    return "la funcion ha retornado una cadena de texto";
}

//invocacion de la funcion
//belleza();
//let valordevo = devolucion();
//console.log(valordevo);
function saludar(nombre, edad){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar("kenobi", 7);
// funciones declaradas vs funciones expresadas

function declara(){
    console.log("esto es una funcion declarada puede invocarse en cualquier parte de nuestro codigo");
}
declara();
//funcion anonima

const funciexpres = function(){
console.log("esto es una  funcion expresada");
}
funciexpres();

let a = new String ("Holla Parchis");
console.log(a)

car.name = fiat
car_name = fiat

