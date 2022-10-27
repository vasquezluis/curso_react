import React from "react";
import ReactDOM from "react-dom/client";

// import components
import { Greeting, UserCard } from "./Greetings";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Posts, Products } from "./Posts";

// hook de react
import { useState, useEffect } from 'react';

// import componente clase
import { Saludar } from "./Saludar";

const root = ReactDOM.createRoot(document.getElementById("root"));

// array en react
const users = [
  {
    id: 1,
    name: "Ryan Ray",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Joe",
    image: "https://robohash.org/user2",
  },
];

const handleChange = (e) => {
  console.log(e.target.value);
};

// uso de hook usestate
function Counter() {
  const [counter, setCounter] = useState(0)
  
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={() => {
        setCounter(counter  + 1)
      }}>Sumar</button>
      <button onClick={() => {
        setCounter(counter - 1)
      }}>Restart</button>
      <button onClick={() => {
        setCounter(0)
      }}>Reiniciar</button>
    </div>
  );
}

function Save(){
  const [mensaje, setMensaje] = useState('')

  // useEffect
  useEffect(function() {
    console.log('render');
  }, [ ]) // los corchetes pueden contener una variable para poder ejecutarse cuando esa variable cambie

  return <div>
    <input onChange={e => setMensaje(e.target.value)}/>
    <button onClick={() => {
      alert('el mensaje es: ' + mensaje)
    }}>Save</button>
  </div>
}




root.render(
  // fragment, etiqueta vacia
  <>
    {/* <Button text='Click me'/>
    <Button text='Pay'/>
    <Button text='' name='Joe'/> */}
    {/* props son atributos (parametros) para la funcion */}
    {/* <UserCard
      name="Luis V"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 amain street", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    />

    <UserCard
      name="Joc Mcmillan"
      amount={1000}
      married={false}
      points={[100, 20]}
      address={{ street: "Ave some 123", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    /> */}
    <TaskCard ready={true} />
    <Saludar />
    <Button text="Saludar" />
    <input id="hola" onChange={handleChange} />
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Enviado");
      }}
    >
      <h2>Registro de ususarios</h2>
      <button>Send</button>
    </form>
    <Posts />
    <Products />
    {users.map((user, index) => {
      return (
        <div key={index}>
          <h3>{user.name}</h3>
          <img alt={user.name} src={user.image} />
        </div>
      );
    })}

    <Counter />
    <Save />

  </>
);
