// -> template unions types

type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type Programmer = {
  id?: HeroId;
  name: string;
  age: number;
  isActive?: boolean;
};

let javaDev1: Programmer = {
  name: "Lucas",
  age: 45,
};

function createProgrammer(programmer: Programmer): Programmer {
  const { name, age } = programmer;

  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true,
  };
}

const Jhon = createProgrammer({ name: "Jhon", age: 29 });

// -> Otro ejemplo
type HexadecimalColor = `#${string}`;

const color: HexadecimalColor = "0033ff";
const conor2: HexadecimalColor = '#0033ff'