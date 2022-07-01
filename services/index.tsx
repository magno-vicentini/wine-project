import { IProductData } from "../interfaces/IProduct";

async function getProducts(): Promise<IProductData> {
  const url = 'https://wine-back-test.herokuapp.com/products?page=1&limit=9';
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

async function getProductsPerPage(page: number): Promise<IProductData> {
  const url = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

async function getProductsPerPrice(price: string): Promise<IProductData> {
  const url = `https://wine-back-test.herokuapp.com/products?page=1&limit=9&filter=${price}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

async function getProductsByName(name: string): Promise<IProductData> {
  const url = `https://wine-back-test.herokuapp.com/products?page=1&limit=9&name=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

export { 
  getProducts, 
  getProductsPerPage,
  getProductsPerPrice,
  getProductsByName,
}