// Optional Proteries

type Hero2 = {
  id?: number;
  name: string;
  age: number;
  isActive?: boolean;
};

let hero2: Hero2 = {
  name: "Ironman",
  age: 45,
};

function createHero2(hero: Hero2): Hero2 {
  const { name, age } = hero;

  return {
    name,
    age,
    isActive: true,
  };
}
const spiderman = createHero2({ name: "spiderman", age: 20 });
console.log(spiderman.isActive);

// -> optional chaining
spiderman.id?.toString()
