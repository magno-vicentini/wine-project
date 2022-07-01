import { ReactNode, useState } from "react";
import { IProduct } from "../interfaces/IProduct";
import { getProductsPerPage, getProductsPerPrice } from "../services";
import { ProductContext } from "./productsContext";

type Props = {
  children: ReactNode;
};

export function ProductProvider({ children }: Props) {
  const [products, setProducts] = useState<IProduct[]>([])
  const [numberOfProducts, setNumberOfProducts] = useState<number>(0)

  function getPageProducts(page: number) {
    getProductsPerPage(page)
  }

  function getFilterProducts(filter: string) {
    getProductsPerPrice(filter)
  }
  const value = {
    products,
    setProducts,
    numberOfProducts,
    setNumberOfProducts,
    getPageProducts,
    getFilterProducts,
  }
  return (
      <>
          <ProductContext.Provider value={value}>
              {children}
          </ProductContext.Provider>
      </>
  );
}