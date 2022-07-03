/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { IProduct } from '../../interfaces/IProduct'
import { getAllProducts } from '../../services'
import styles from '../../styles/ProductInfo.module.css'
import ReactStars from 'react-stars'
import useCart from '../../hooks/useCart'
import Link from 'next/link'

const Product: NextPage = () => {
  const [ data, setData ] = useState<IProduct | undefined>()
  const [ count, setCount ] = useState<number>(0)
  const router = useRouter()
  const { id } = router.query
  const { addCountProducts } = useCart()

  async function fetchProducts() {
    const fetchAllProducts = await getAllProducts()
    const productId = fetchAllProducts.items.find((e) => e.id === Number(id))
    setData(productId) 
    localStorage.setItem('cart', '{}')
  }

  function addToCart () {
    if(data === undefined) return 
    addCountProducts(data, count)
    setCount(0)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <Header />
      <div className={ styles.container_return }>
        <span>&#60;</span>
        <Link href="/">
          <button className={ styles.button_return }>Voltar</button>
        </Link>
      </div>
      {
        (data === undefined) 
        ? '' 
        : (
          <div className={ styles.product_container}>
            <Image 
              src={ data.image }
              alt={ data.name } 
              width={381}
              height={579}
            /> 
            <div className={ styles.info_product }>
              <div className={ styles.product_place }>
                <span>Vinhos</span>
                <span>&#62;</span>
                <span>{ data.country}</span>
                <span>&#62;</span>
                <span>{ data.region }</span>
              </div>
              <h1 className={ styles.product_name }>{ data.name }</h1>
              <div className={ styles.product_label }>
                <Image 
                  src={ data.flag }
                  alt={ data.name } 
                  width={15}
                  height={15}
                />
                <span>{data.country}</span>
                <span>{data.type}</span>
                <span>{data.classification}</span>
                <span>{data.size}</span>
                <ReactStars
                  count={ 5 }
                  value={ data.rating}
                  size={15}
                  edit={ false }
                />
                <span>{data.rating}</span>
              </div>
              <div className={ styles.price_member }>
                <span>R$</span>
                <span className= { styles.price_member_focus }>{ data.priceMember }</span>
              </div>
              <span className= { styles.non_member }>{`NAO SOCIO R$ ${data.priceNonMember}/UN`}</span>

              <h5 className= { styles.sommelier_title }>Comentário do Sommelier</h5>
              <p className= { styles.sommelier_comment }>{ data.sommelierComment }</p>
              <div className={ styles.button_add_product}>
                <button
                  type="button" 
                  className={ styles.button_count }
                  data-test="button_sub_quantity"
                  onClick={ () => !count ? count : setCount(count - 1)}
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  type="button" 
                  className={ styles.button_count }
                  onClick={ () => setCount(count + 1)}
                  data-test="button_add_quantity"
                >
                  +
                </button>
                  
                <button 
                  type="button" 
                  className={ styles.button_add_cart }
                  onClick={ () => addToCart()}
                  data-test="button_add_product"
                >
                  ADICIONAR
                </button>

              </div>
            </div>
          </div>
          )
      }
    </div>
  )
}

export default Product;