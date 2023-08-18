import "./App.css";
import { useState } from "react";
import { STATUS } from "react-joyride";
import Tour from "./components/Tour";

function App() {
  const [tourState, setTourState] = useState({
    run: false,
    steps: [
      {
        content: (
          <h2 className="text-sm">
            Tour de las diferentes secciones de esta aplicación.
          </h2>
        ),
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
        placement: "center",
        target: "body",
      },
      {
        content: (
          <h2 className="text-sm">
            En esta sección se puede encontrar el sidebar que contiene el menú
            de la aplicación, con botones y muchas otras cosas más.
          </h2>
        ),
        placement: "right",
        target: "#step-1",
        // title: "Seccion de historial",
      },
      {
        content: (
          <h2 className="text-sm">
            En esta sección se puede encontrar con el menú del usuario y sus
            configuraciones, así como la opción de poder cerrar sesión.
          </h2>
        ),
        placement: "bottom",
        target: "#step-2",
        // title: "Seccion de usuario",
      },
      {
        content: (
          <h2 className="text-sm">
            En esta sección se encuentra todo el contenido principal de la
            aplicación, contenido dinámico y contenido autogenerado por nuestros
            sistemas.
          </h2>
        ),
        placement: "center",
        target: "#step-3",
        // title: "Seccion de input del usuario",
      },
    ],
  });

  const handleJoyrideCallback = (data) => {
    const { status } = data;

    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setTourState((prevState) => ({ ...prevState, run: false }));
    }
  };

  const startTour = () => {
    setTourState((prevState) => ({ ...prevState, run: true }));
  };

  return (
    <div className="flex h-screen max-h-screen py-2 sm:py-5 px-1 sm:px-28 bg-gray-200">
      <aside
        className={`bg-red-600 xl:w-1/5 2xl:w-1/6 hidden xl:flex 2xl:flex flex-col justify-between rounded-lg p-2`}
        data-testid="sideBar"
        id="step-1"
      >
        <button>restar</button>
        <button>pausar</button>
        <button>intensidad baja</button>
        <button>intensidad media</button>
        <button>intensidad alta</button>
      </aside>

      <div className="w-full flex flex-col ml-2">
        <div
          className="bg-gray-800 h-12 mb-4 flex justify-end items-center"
          id="step-2"
        >
          <button className="topButton">incrementar</button>
        </div>

        <main
          className="bg-gray-500 w-full h-full flex justify-center items-center"
          id="step-3"
        >
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={startTour}
          >
            Run tour
          </button>
        </main>
      </div>

      <Tour
        tourState={tourState}
        handleJoyrideCallback={handleJoyrideCallback}
      />
    </div>
  );
}

export default App;
