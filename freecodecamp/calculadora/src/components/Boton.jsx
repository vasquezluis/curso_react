import "../styles/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    // si el valor no es numero, punto o igual
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Boton;
