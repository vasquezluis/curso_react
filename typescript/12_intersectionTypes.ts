type PersonId = `${string}-${string}-${string}-${string}-${string}`;
// Union Types
type PersonCountry = "Guatemala" | "Mexico" | "USA" | "Canada";

// intersection types
type PersonBasicInfo = {
  name: string;
  age: number;
};

type PersonProperties = {
  id?: PersonId;
  isActive?: boolean;
  personCountry?: PersonCountry;
};

// interseccion de tipos
type Person = PersonBasicInfo & PersonProperties;

let person1: Person = {
  name: "Lucas",
  age: 45,
};

function createPerson(input: PersonBasicInfo): Person {
  const { name, age } = input;

  return {
    id: "A12-456-asd-123-oki",
    name,
    age,
    isActive: true,
  };
}

const lucas = createPerson({ name: "lucas", age: 30 });
lucas.personCountry = "Canada";

// -----> type indexing
type PersonProperties2 = {
  isActive: boolean;
  address: {
    planet: string;
    city: string;
  };
};

const addressPerson: PersonProperties2["address"] = {
  planet: "Earth",
  city: "Madrid",
};

// ------> type from value
const address = {
  planet: "Earth",
  city: "Madrid",
};

type Address = typeof address;

const addressTwitch: Address = {
  planet: "Mars",
  city: "Chimichanga",
};

// -------> type from function return
function createAddress() {
  return {
    planet: "Tierra",
    city: "Barcelon",
  };
}

type Addre = ReturnType<typeof createAddress>
