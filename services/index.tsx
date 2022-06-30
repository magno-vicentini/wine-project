import { IProductData } from "../interfaces/IProduct";

async function getProducts(): Promise<IProductData> {
  const url = 'https://wine-back-test.herokuapp.com/products?page=1&limit=10';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

async function getProductsPerPage(page: number): Promise<IProductData> {
  const url = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=10`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

export { 
  getProducts, 
  getProductsPerPage,
}