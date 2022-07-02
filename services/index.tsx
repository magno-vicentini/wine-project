import { IProductData } from "../interfaces/IProduct";

async function getProducts(page: number): Promise<IProductData> {
  const url = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`;
  const response = await fetch(url);
  const data = await response.json();
  console.log('allProductos', data);
  return data;
}
async function getAllProducts(): Promise<IProductData> {
  const url = `https://wine-back-test.herokuapp.com/products?`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

async function getProductsPerPrice(page: number, price: string): Promise<IProductData> {
  const url = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9&filter=${price}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

async function getProductsByName(page: number, name: string): Promise<IProductData> {
  const url = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9&name=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

export { 
  getProducts, 
  getProductsPerPrice,
  getProductsByName,
  getAllProducts,
}