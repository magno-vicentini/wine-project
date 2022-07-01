import { NextPage } from "next";
import Image from "next/image";
import styles from '../styles/Product.module.css'
import { IProductProps } from "../interfaces/IProduct";
import { useProduct } from "../context/productsContext";
import Link from "next/link";

const ProductCard: NextPage<IProductProps> = ({ data }) => {
  const { setCartQuantity } = useProduct()

  function addToCart () {
    if(!localStorage.getItem('cart')) {
      return localStorage.setItem('cart', JSON.stringify([data]))
    }else {
      localStorage.setItem('cart', 
        JSON.stringify([...JSON.parse(localStorage.getItem('cart') || ''), data]))
    }
    const cart = (JSON.parse(localStorage.getItem('cart') || '')).length
    setCartQuantity(cart)
  }
  return (
    <div className={ styles.product_card}>
      <div className={styles.product_info}>
        <Link href={`/product/${ data.id }`}>
          <Image 
            src={ data.image }
            alt={ data.name } 
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
        onClick={ () => addToCart()}
      >
        ADICIONAR
      </button>

    </div>
  )
}

export default ProductCard

