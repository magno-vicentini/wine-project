import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { getProducts } from '../services'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import FilterPrice from '../components/FilterPrice'
import { useProduct } from '../context/productsContext'
import ButtonsPages from '../components/ButtonsPages'

const Home: NextPage = () => {
  const { 
      products, 
      setProducts, 
      numberOfProducts, 
      setNumberOfProducts,
      setProductsData,
      setTypeFilter,
      setCartQuantity
    } = useProduct()

  async function fetchProducts() {
    const fetchProducts = await getProducts(1)
    setNumberOfProducts(fetchProducts.totalItems)
    setProductsData(fetchProducts)
    setProducts(fetchProducts.items)
    setTypeFilter({ type:'global', filter:'' })
  }

  // function getLocaStorage() {
  //   // const cart = (JSON.parse(localStorage.getItem('cart') || '')).length
  //   // setCartQuantity(cart)
  // }

  useEffect( () => {
    fetchProducts()
    // getLocaStorage()
  }, [])

  return (
    <div>
      <Head>
        <title>W/NE App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Header />
          <div className={ styles.container }>
            <FilterPrice />
            <div className={ styles.products_info}>
              <p className={ styles.number_of_products }>{ numberOfProducts } produtos encontrados</p>
              <div className={styles.products_container}>
                { !products ? '' : products.map((product) => {
                  return (
                    <ProductCard data={ product } key={ product.id }/>
                  )
                })}
              </div>
              <ButtonsPages />
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
