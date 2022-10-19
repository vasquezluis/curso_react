export function Greeting() {
  const user = {
    firstName: "Luis",
    lastName: "Vasquez",
  };

  const married = true;

  function add(x, y) {
    return x + y;
  }

  // operador ternario
  return (
    <div>
      <h1>{user.firstName}</h1>
      <h3>{user.lastName}</h3>
      <br />
      <p>{married.toString()}</p>
      <p>{add(10, 30)}</p>
    </div>
  );
}

export function UserCard() {
  return <h1>User Card</h1>;
}
