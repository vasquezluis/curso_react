import React from "react";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="image-testimonio"
        src={require("../imagenes/testimonio-emma.png")}
        alt="emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera de software en Spotify</p>
        <p className="texto-testimonio">
          No se que poner aqui, pero este es el testimonio de Emma.
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
