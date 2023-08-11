const enum Error_TYPES {
  NOT_FOUND = "not_found",
  UNAUTHORIZED = "unauthorized",
  FORBIDDEN = "forbidden",
}

function mostrarMensaje(tipoDeError: Error_TYPES) {
  if (tipoDeError === Error_TYPES.NOT_FOUND) {
    console.log("No se encontro el recurso");
  } else if (tipoDeError === Error_TYPES.UNAUTHORIZED) {
    console.log("No estas autorizado");
  } else if (tipoDeError === Error_TYPES.FORBIDDEN) {
    console.log("No tienes permisos");
  }
}
