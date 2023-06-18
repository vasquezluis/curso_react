// funciones en TypeScript

function saludar(name: string): any {
  console.log(`Hola ${name}`);
}

saludar('Fernando');
saludar(2)

function saludo({name, age}){
  console.log(`Hola ${name} tienes ${age} años`);
}

saludo({name: 'Fernando', age: 30});