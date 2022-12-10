import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";

import { useState } from "react";

function App() {
  // hoock para contador
  const [numClics, setNumClics] = useState(0);

  // funcion sumar
  const sumarClic = () => {
    setNumClics(numClics + 1);
  };
  // funcion restar
  const restarClic = () => {
    setNumClics(numClics - 1);
  };
  //funcion reiniciar
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div>
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freecodecamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Sumar" esBotonClic={true} manejarClic={sumarClic}></Boton>
        <Boton
          texto="Reiniciar"
          esBotonClic={false}
          manejarClic={reiniciarContador}
        ></Boton>
        <Boton
          texto="Restar"
          esBotonClic={true}
          manejarClic={restarClic}
        ></Boton>
      </div>
    </div>
  );
}

export default App;
