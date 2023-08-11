// narrowing
// Cuando se tiene un tipo de dato que puede ser de varios tipos de datos

/**
 * Ejemplo 1
 * Función que muestra la longitud de un string o de un número
 */
function mostrarLongitud(objeto: number | string): number {
  if (typeof objeto == "string") {
    return objeto.length;
  }

  return objeto.toString().length;
}

mostrarLongitud("hola");

interface Mario {
  commpany: "Nintendo";
  nombre: string;
  saltar: () => void;
}

interface Sonic {
  commpany: "Sega";
  nombre: string;
  correr: () => void;
}

type Personaje = Mario | Sonic;

function jugar(personaje: Personaje) {
  if (personaje.commpany === "Nintendo") {
    personaje.saltar();
    return;
  }
  personaje.correr();
}

// * Si no hay company, es mejor usar un type guard
// intentar siempre evitar el uso de type guards
// un type guard es una función que nos permite saber si un objeto tiene una propiedad
// ejemplo:
function isMario(personaje: Personaje): personaje is Mario {
  return (personaje as Mario).saltar !== undefined;
}

function jugar2(personaje: Personaje) {
  if (isMario(personaje)) {
    personaje.saltar();
    return;
  }
  personaje.correr();
}
