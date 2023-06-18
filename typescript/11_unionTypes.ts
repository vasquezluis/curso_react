type PersonId = `${string}-${string}-${string}-${string}-${string}`;
// Union Types
type PersonCountry = "Guatemala" | "Mexico" | "USA" | "Canada";

type Person = {
  id?: PersonId;
  name: string;
  age: number;
  isActive?: boolean;
  personCountry?: PersonCountry;
};

let person1: Person = {
  name: "Lucas",
  age: 45,
};

function createPerson(person: Person): Person {
  const { name, age } = person;

  return {
    id: "A12-456-asd-123-oki",
    name,
    age,
    isActive: true,
  };
}

const lucas = createPerson({ name: "lucas", age: 30 });
lucas.personCountry = 'Canada'
