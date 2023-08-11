// interfaces

// interface Hero {
//   id: string;
//   name: string;
//   age: number;
//   saludar: () => void;
// }

// const hero: Hero = {
//   id: "1",
//   name: "Superman",
//   age: 60,
//   saludar: () => {
//     console.log("Hola");
//   },
// };

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  quantity: number;
}

interface Zapatilla extends Producto {
  talla: number;
}

interface CarritoDeCompras {
  totalPrice: number;
  productos: (Producto | Zapatilla)[];
}

interface CarritoOps {
  add: (product: Producto) => void;
  remove: (id: number) => void;
  clear: () => void;
}

const carrito: CarritoDeCompras = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 100,
      quantity: 1,
      talla: 42,
    },
  ],
};
