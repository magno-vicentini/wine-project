import { IProduct } from "../interfaces/IProduct";

async function getProducts(): Promise<IProduct[]> {
  const url = 'https://wine-back-test.herokuapp.com/products?page=1&limit=10';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data.items;
}

export default getProducts