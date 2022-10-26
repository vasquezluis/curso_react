import { VscGlobe } from "react-icons/vsc";
import axios from "axios";

export const Posts = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }}
    >
      <VscGlobe />
      Traer datos
    </button>
  );
};

export const Products = () => {
  return (
    <button
      onClick={async () => {
        const response = await axios.get(
          "https://inventario-api-f3if.onrender.com/api/products"
        );
        let {
          data: { body },
        } = response;
        console.log(body);
      }}
    >
      <VscGlobe />
      Traer productos
    </button>
  );
};
