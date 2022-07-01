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
        <h6 className={ styles.product_name}>{ data.name }</h6>
        <div className={ styles.price_container}>
          <span className={ styles.product_price }>{ data.price }</span>
          <span className={ styles.discount_product}>{ data.discount }% OFF</span>
        </div>
        <div className={ styles.price_mender_container}>
          <span className={ styles.socio_wine}>Sócio Wine </span>
          <div>
            <span className= { styles.price_member}>R$</span>
            <span className={ styles.price_member_focus}>{ data.priceMember}</span>
          </div>
        </div>
        <span className= { styles.non_member}>Não Socio :{ data.priceNonMember}</span>

      </div>
      
      <button type="button" className={ styles.button_add_product}>ADICIONAR</button>

    </div>
  )
}

export default ProductCard

