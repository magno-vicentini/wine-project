import { NextPage } from "next";
import styles from '../styles/FilterPrice.module.css'

const FilterPrice: NextPage = () => {
  return (
    <div className={ styles.filter_container}>
      <h1>Refine sua busca</h1>
      <div className={ styles.filter_card }>
        <p>Por preço:</p>
        <label htmlFor="filter-price">
          <input type="radio" name="filter-price" id="" />
          Até R$40
        </label>
        <label htmlFor="filter-price">
          <input type="radio" name="filter-price" id="" />
          R$40 A R$60
        </label>
        <label htmlFor="filter-price">
          <input type="radio" name="filter-price" id="" />
          R$100 A R$200
        </label>
        <label htmlFor="filter-price">
          <input type="radio" name="filter-price" id="" />
          R$200 A R$500
        </label>
        <label htmlFor="filter-price">
          <input type="radio" name="filter-price" id="" />
          Acima de 500
        </label>
      </div>
    </div>
  )
}

export default FilterPrice