import { createContext, useContext } from "react";
import { IProduct } from "../interfaces/IProduct"

type productsContexttype = {
  products: IProduct[] | [];
  setProducts: (IProduct: IProduct[]) => void;
  numberOfProducts: number
  setNumberOfProducts: (num: number) => void
  getPageProducts: (page: number) => void;
  getFilterProducts: (filter: string) => Promise<IProduct[]> | void;
}

const pruductsContextDefaultValues: productsContexttype = {
  products: [],
  setProducts: () => {},
  numberOfProducts: 0,
  setNumberOfProducts: () => {},
  getPageProducts: () => {},
  getFilterProducts: () => {},

}

export const ProductContext = createContext<productsContexttype>(pruductsContextDefaultValues)

export function useProduct() {
  return useContext(ProductContext)
}