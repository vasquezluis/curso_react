import React from "react";
import ReactDOM from "react-dom/client";

// import components
import { Greeting, UserCard } from "./Greetings";
import Product from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // fragment, etiqueta vacia
  <>
    <Greeting />
    <UserCard />
    <Product />
  </>
);
