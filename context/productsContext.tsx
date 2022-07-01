import { createContext, useContext } from "react";
import { IProduct, IProductData } from "../interfaces/IProduct"
 export interface ITypeFilter {
    type?: string;
    filter?: string;
 }
type productsContexttype = {
  products: IProduct[] | [];
  setProducts: (IProduct: IProduct[]) => void;
  productsData: IProductData | undefined;
  setProductsData: (productData: IProductData) => void;
  typeFilter: ITypeFilter
  setTypeFilter: (obj: object) => void
  numberOfProducts: number
  setNumberOfProducts: (num: number) => void
}

const pruductsContextDefaultValues: productsContexttype = {
  products: [],
  setProducts: () => {},
  productsData: undefined,
  setProductsData: () => {},
  typeFilter: {},
  setTypeFilter: () => {},
  numberOfProducts: 0,
  setNumberOfProducts: () => {},

}

export const ProductContext = createContext<productsContexttype>(pruductsContextDefaultValues)

export function useProduct() {
  return useContext(ProductContext)
}