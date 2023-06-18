// tipado 1
function saludoTipado({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name} tienes ${age} años`);
}

saludoTipado({ name: "Fernando", age: 30 });

// tipado 2
type Persona = {
  name: string;
  age: number;
};

function saludoTipado2(persona: Persona): number {
  const { name, age } = persona;

  console.log(`Hola ${name} tienes ${age} años`);

  return age;
}

saludoTipado2({ name: "Fernando", age: 30 });

// tipado 3
const sayHiFromFunction = (fn: (name: string) => void) => {
  return fn("Fernando");
};

const sayHi = (name: string) => `Hola ${name}`;

sayHiFromFunction(sayHi);
