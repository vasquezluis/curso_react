// type alias

type Hero = {
  name: string;
  age: number;
};

let hero: Hero = {
  name: "Ironman",
  age: 45,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;

  return {
    name,
    age,
  };
}
const thor = createHero({ name: "Thor", age: 1000 });
