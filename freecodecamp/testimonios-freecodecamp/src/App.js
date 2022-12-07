import "./App.css";
import Testimonio from "./components/Testimonio";

import data from "./data/testimonios.js";

const user1 = data.user1;
const user2 = data.user2;
const user3 = data.user3;

console.log(user1);

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Los testimonios de los alumnos de FreeCodeCamp: </h1>
        <Testimonio
          nombre={user1.nombre}
          pais={user1.pais}
          imagen={user1.imagen}
          cargo={user1.cargo}
          empresa={user1.empresa}
          testimonio={user1.testimonio}
        />
        <Testimonio
          nombre={user2.nombre}
          pais={user2.pais}
          imagen={user2.imagen}
          cargo={user2.cargo}
          empresa={user2.empresa}
          testimonio={user2.testimonio}
        />
        <Testimonio
          nombre={user3.nombre}
          pais={user3.pais}
          imagen={user3.imagen}
          cargo={user3.cargo}
          empresa={user3.empresa}
          testimonio={user3.testimonio}
        />
      </div>
    </div>
  );
}

export default App;
