import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { useProduct } from '../../context/productsContext'
import { IProduct } from '../../interfaces/IProduct'
import { getAllProducts } from '../../services'
import styles from '../../styles/ProductInfo.module.css'

const Product: NextPage = () => {
  const [ data, setData ] = useState<IProduct | undefined>()
  const [ count, setCount ] = useState<number>(0)
  const router = useRouter()
  const { id } = router.query
  const { setCartQuantity } = useProduct()

  async function fetchProducts() {
    const fetchAllProducts = await getAllProducts()
    const productId = fetchAllProducts.items.find((e) => e.id === Number(id))
    setData(productId) 
  }

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

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <Header />
      {
        (data === undefined) 
        ? '' 
        : (
          <div className={ styles.product_container}>
            <Image 
              src={ data.image }
              alt={ data.name } 
              width={500}
              height={500}
            /> 
            <div className={ styles.info_product }>
              <div className={ styles.product_place }>
                <span>Vinhos</span>
                <span>{ data.country }</span>
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
                  onClick={ () => !count ? count : setCount(count - 1)}
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  type="button" 
                  className={ styles.button_count }
                  onClick={ () => setCount(count + 1)}
                >
                  +
                </button>
                  
                <button 
                  type="button" 
                  className={ styles.button_add_cart }
                  onClick={ () => addToCart()}
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