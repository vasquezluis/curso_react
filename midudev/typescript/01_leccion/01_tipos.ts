// en automatico se detecta el tipo de dato en vscode
const hola = 'Hola';
hola.length

// Tipos
let nombre: string = 'Peter';
let numero: number = 123;
let booleano: boolean = true;

let hoy: Date = new Date();

// any -> cualquier cosa
let cualquiera: any;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy; 

// Objetos
let spiderman = {
    nombre: 'Peter',
    edad: 20
}

spiderman = {
    nombre: 'Juan',
    edad: 30
}