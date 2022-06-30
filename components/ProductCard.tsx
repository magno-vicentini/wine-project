import { NextPage } from "next";
import Image from "next/image";
import styles from '../styles/Product.module.css'
import { IProductProps } from "../interfaces/IProduct";

const ProductCard: NextPage<IProductProps> = ({ data }) => {
  console.log('propss', data)
  return (
    <div className={styles.container}>
      <Image 
        src={ data.image }
        alt={ data.name } 
        width={500}
        height={500}
      />
      <h6>{ data.name }</h6>
      <div>
        <span>{ data.price }</span>
        <span>{ data.discount }</span>
      </div>
      <span>`Sócio Wine : ${ data.priceMember}`</span>
      <span>`Não Socio : ${ data.priceNonMember}`</span>
    </div>
  )
}

export default ProductCard

