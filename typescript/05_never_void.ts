// functions never / void

// function -> never returns anything
function throwError(message: string): never {
  throw new Error(message);

  // more code here
}

// function -> can return something or not
function logMessage(message: string): void {
  console.log(message);
}
