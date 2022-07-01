import { NextPage } from "next";
import { useProduct } from "../context/productsContext";
import { getProductsPerPrice } from "../services";
import styles from '../styles/FilterPrice.module.css'

const FilterPrice: NextPage = () => {
  const { setProducts } = useProduct()

  async function changeFilter (filter: string) {
    const productsFiltered = await getProductsPerPrice(filter);
    setProducts(productsFiltered.items)
  }
  return (
    <div className={ styles.filter_container}>
      <h1>Refine sua busca</h1>
      <div className={ styles.filter_card }>
        <p>Por preço:</p>
        <label htmlFor="filter-price">
          <input type="radio" name="filter-price" id="" onClick={ () => changeFilter('0-40')} />
          Até R$40
        </label>
        <label htmlFor="filter-price">
          <input type="radio" name="filter-price" id="" onClick={ () => changeFilter('40-60')} />
          R$40 A R$60
        </label>
        <label htmlFor="filter-price">
          <input  
            type="radio" 
            name="filter-price" 
            id="" 
            onClick={ () => changeFilter('100-200')} 
          />
          R$100 A R$200
        </label>
        <label htmlFor="filter-price">
          <input 
            type="radio" 
            name="filter-price" 
            id="" 
            onClick={ () => changeFilter('200-500')} 
          />
          R$200 A R$500
        </label>
        <label htmlFor="filter-price">
          <input 
            type="radio" 
            name="filter-price" 
            id="" 
            onClick={ () => changeFilter('500-10000')} 
          />
          Acima de R$500
        </label>
      </div>
    </div>
  )
}

export default FilterPrice