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
  cartQuantity: number
  setCartQuantity: (num: number) => void
  cart: any
  setCart: ( cart: any) => void
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
  cartQuantity: 0,
  setCartQuantity: () => {},
  cart: {},
  setCart: () => {}

}

export const ProductContext = createContext<productsContexttype>(pruductsContextDefaultValues)

export function useProduct() {
  return useContext(ProductContext)
}