import axios from "axios";

const cache: { [key: string]: any } = {};

const fetchProdutos = async () => {
  try {
    if (cache["produtos"]) {
      return cache["produtos"];
    }

    const response = await axios.get("https://fakestoreapi.com/products");
    cache["produtos"] = response.data;
    return response.data;
  } catch (error) {
    console.error("Erro ao obter produtos:", error);
  }
};

export { fetchProdutos };
