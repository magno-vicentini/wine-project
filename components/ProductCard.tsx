import { NextPage } from "next";
import Image from "next/image";
import styles from '../styles/Product.module.css'
import { IProductProps } from "../interfaces/IProduct";
import Link from "next/link";
import useCart from "../hooks/useCart";

const ProductCard: NextPage<IProductProps> = ({ data }) => {
  const { addCountProducts } = useCart()

  function addToCart (e: any): void {
    if(data === undefined) return 
    addCountProducts(data, 1)
    e.target.classList.add('button_add_selected')
  }
  return (
    <div className={ styles.product_card}>
      <div className={styles.product_info}>
        <Link href={`/product/${ data.id }`}>
          <Image 
            src={ data.image }
            alt={ data.name }
            data-test={ `product_${ data.id}`}
            className= { styles.product_image} 
            width={120}
            height={120}
          /> 
        </Link>
        <h6 className={ styles.product_name}>{ data.name }</h6>
        <div className={ styles.price_container}>
          <span className={ styles.product_price }>{ data.price }</span>
          <span className={ styles.discount_product}>{ data.discount }% OFF</span>
        </div>
        <div className={ styles.price_member_container}>
          <span className={ styles.socio_wine}>Sócio Wine </span>
          <div>
            <span className= { styles.price_member}>R$</span>
            <span className={ styles.price_member_focus}>{ data.priceMember}</span>
          </div>
        </div>
        <span className= { styles.non_member}>Não Socio :{ data.priceNonMember}</span>

      </div>
      
      <button 
        type="button" 
        className={ styles.button_add_product}
        data-test={ `button_add_product_${ data.id }`}
        onClick={ (e) => addToCart(e)}
      >
        ADICIONAR
      </button>

    </div>
  )
}

export default ProductCard

