import { NextPage } from "next";
import Image from "next/image";
import styles from '../styles/Product.module.css'
import { IProductProps } from "../interfaces/IProduct";

const ProductCard: NextPage<IProductProps> = ({ data }) => {
  console.log('propss', data)
  return (
    <div className={ styles.product_card}>
      <div className={styles.product_info}>
        <Image 
          src={ data.image }
          alt={ data.name } 
          width={120}
          height={120}
        />
        <h6>{ data.name }</h6>
        <div>
          <span>{ data.price }</span>
          <span>{ data.discount }% OFF</span>
        </div>
        <span>Sócio Wine :{ data.priceMember}</span>
        <span>Não Socio :{ data.priceNonMember}</span>

      </div>
      
      <button type="button" className={ styles.button_add_product}>ADICIONAR</button>

    </div>
  )
}

export default ProductCard

