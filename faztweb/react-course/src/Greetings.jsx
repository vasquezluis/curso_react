export function Greeting({ title, name = "user" }) {
  console.log(title);
  console.log(name);

  const user = {
    firstName: "Luis",
    lastName: "Vasquez",
  };

  // operador ternario

  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function UserCard({ name, amount, married, address, greet }) {

  return (
    <>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? "Married" : "Single"}</p>
      <ul>
        <li>{address.city}</li>
        <li>{address.street}</li>
      </ul>
    </>
  );
}
