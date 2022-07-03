import { NextPage } from 'next'
import Image from 'next/image'
import Header from '../components/Header'
import { useProduct } from '../context/productsContext'
import useCart from '../hooks/useCart'
import { IProduct } from '../interfaces/IProduct'
import styles from '../styles/Cart.module.css'

const Cart: NextPage = () => {
  const { deleteProduct } = useCart()
  const { cart } = useProduct()

  function removeToCart(product: IProduct) {
    deleteProduct(product)
  }

  return (
    <div>
      <Header />
      <main>
        <div className={ styles.cart_container}>
          {
            (!cart) 
              ? <p>Você não adicionou nenhum produto no carrinho.</p> 
              : Object.values(cart).map((product: any) => {
                return (
                  <div key={ product.id } className={ styles.product_card }>
                    <Image 
                      src={ product.image }
                      alt={ product.name } 
                      width={50}
                      height={50}
                    />
                    <p>{ product.name }</p>
                    <h1>{ product.price }</h1>
                    <div>
                      <span>Quantidade:</span>
                      <span>{ product.quantity }</span>
                    </div>
                    <button 
                      type="button" 
                      onClick={ () => removeToCart(product)}
                    >
                      REMOVER
                    </button>
                  </div>
                )
              })
          }
        </div>
      </main>
    </div>
  )
}

export default Cart;