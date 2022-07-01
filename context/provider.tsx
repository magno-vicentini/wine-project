import { ReactNode, useState } from "react";
import { IProduct, IProductData } from "../interfaces/IProduct";
import { ITypeFilter, ProductContext } from "./productsContext";

type Props = {
  children: ReactNode;
};

export function ProductProvider({ children }: Props) {
  const [products, setProducts] = useState<IProduct[]>([])
  const [numberOfProducts, setNumberOfProducts] = useState<number>(0)
  const [ productsData, setProductsData ] = useState<IProductData>()
  const [ typeFilter, setTypeFilter ] = useState<ITypeFilter>({})
  const [ cartQuantity, setCartQuantity ] = useState<number>(0)


  
  const value = {
    products,
    setProducts,
    productsData,
    setProductsData,
    typeFilter,
    setTypeFilter,
    numberOfProducts,
    setNumberOfProducts,
    cartQuantity,
    setCartQuantity,
  }
  return (
      <>
          <ProductContext.Provider value={value}>
              {children}
          </ProductContext.Provider>
      </>
  );
}