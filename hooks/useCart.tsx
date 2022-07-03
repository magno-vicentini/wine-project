import { useEffect, useState } from "react"
import { useProduct } from "../context/productsContext"
import { IProduct } from "../interfaces/IProduct"

export default function useCart() {
  const [ cart, setCart ] = useState<IProduct[]>(JSON.parse(localStorage.getItem('cart') || '{}'))
  const { setCartQuantity } = useProduct()

  useEffect(() => {
      updateTotalItems(),
      saveCartLocalStorage()
  }, [cart])

  function updateTotalItems() {
    const quantityItems = Object.values(cart)
      .reduce((acc: number, { quantity = 0}: IProduct ) => acc + quantity, 0 )
    // console.log(quantityItems)
    setCartQuantity(quantityItems)
  }

  function addProduct(data: IProduct) {
    const product = cart[data.id]
    console.log(product)

    if(!product) {
      console.log('chegou aqui')
      console.log('cart aqui', cart)
      console.log(data)
      console.log(JSON.parse(localStorage.getItem('cart') || ''))
      setCart({ ...cart, [ data.id ]: {...data, quantity: 1} })
    } else {
      const quantity = product.quantity || 0
      console.log(quantity)
      setCart({ ...cart, [ data.id ]: {...data, quantity: quantity + 1} })
    }
  }

  function addCountProducts (data: IProduct, count: number) {
    const product = cart[data.id]

    if(!product) {
      setCart({ ...cart, [ data.id ]: {...data, quantity: count} })
    } else {
      const quantity = product.quantity || 0
      setCart({ ...JSON.parse(localStorage.getItem('cart') || ''), [ data.id ]: {...data, quantity: quantity + count} })
    }
  }

  function deleteProduct(product: IProduct) {
    console.log(product)
    const deletedProduct = Object.values(cart).filter((e) => e !== product)
    console.log(deletedProduct)
    setCart({...deletedProduct})
  }

  function saveCartLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(JSON.parse(localStorage.getItem('cart') || ''))
  }
  return {
    addProduct,
    addCountProducts,
    deleteProduct,
  }
}