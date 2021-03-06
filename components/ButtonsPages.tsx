/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useProduct } from "../context/productsContext";
import { getProducts, getProductsByName, getProductsPerPrice } from "../services";
import styles from '../styles/ButtonsPages.module.css'

const ButtonsPages: NextPage = () => {
  const { productsData, typeFilter, setProductsData,setProducts } = useProduct()
  const [ page, setPage ] = useState(0)

  async function changePage (num: number) {
    if(productsData?.totalPages !== undefined && productsData.totalPages < num) {
      return setPage(productsData.page)
    }

    if(typeFilter.type === "name" && typeFilter.filter !== undefined) {
      const fetchProductsName = await getProductsByName(num, typeFilter.filter)
      setProductsData(fetchProductsName)
      setPage(fetchProductsName.page)
      return setProducts(fetchProductsName.items)
    }
    if(typeFilter.type === "price" && typeFilter.filter !== undefined) {
      const fetchProductsPrice = await getProductsPerPrice(num, typeFilter.filter)
      setProductsData(fetchProductsPrice)
      setPage(fetchProductsPrice.page)
      return setProducts(fetchProductsPrice.items)
    }

    const fetchProducts =  await getProducts(num)
    setProductsData(fetchProducts)
    setPage(fetchProducts.page)
    return setProducts(fetchProducts.items)
  }

  useEffect(() => {
    if(productsData === undefined ) return setPage(0)
    setPage(productsData.page)
  }, [])

  return (
    <div className={ styles.buttons_container}>
      <button 
        type="button" 
        data-test='button_change_page_1'
        onClick={ () => {changePage(( page <= 2) ? 1 : page - 1)}}
        className={ styles.button_1 }
      >
      {
        ( page <= 2) ? 1 : page - 1 
      }</button>
      <button 
        type="button"
        data-test='button_change_page_2'
        onClick={ () => {changePage(( page <= 2) ? 2 : page )}}
        className={ styles.button_2 }
      >{
      (page <= 2) ? 2 : page 
      }</button>
      <button 
        type="button"
        data-test='button_change_page_3'
        onClick={ () => changePage(( page <= 2) ? 3 : page + 1)}
        className={ styles.button_3}
      >{
      (page <= 2) ? 3 : page + 1
      }</button>
      <select 
        name="pages" 
        id="" 
        onChange={({target}) => changePage(Number(target.value))}
        className={ styles.button_select_pages}
      >
          <option value="1">...</option>
        { [...Array(productsData?.totalPages)].map((_page, index) => {
          return (
            <option 
              key={ index + 1 } 
              value={ index + 1}
            >
              Pagina {index + 1}
            </option>
          )
        })}
      </select>
      <button 
        onClick={ () => changePage(page + 2 )}
        className={ styles.button_next}
      >
        Pr??ximo 
      </button>
      <span>&#187;</span>
    </div>
  )
}

export default ButtonsPages;
