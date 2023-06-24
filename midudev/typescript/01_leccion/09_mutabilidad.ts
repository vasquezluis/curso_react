// -> mutabilidad

// -> readonly no permite cambiar una propiedad
// -> no es 100% tema de mutabilidad
type Police = {
  readonly id?: number;
  name: string;
  age: number;
  isActive?: boolean;
};

let police1: Police = {
  name: "Ironman",
  age: 45,
};

function createPolice(police: Police): Police {
  const { name, age } = police;

  return {
    name,
    age,
    isActive: true,
  };
}
const Jhon = createPolice({ name: "Jhon", age: 29 });

Jhon.id = 123413413