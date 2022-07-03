/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useProduct } from "../context/productsContext"
import { IProduct } from "../interfaces/IProduct"

export default function useCart() {
  const { setCartQuantity, cart, setCart  } = useProduct()

  useEffect(() => {
    saveCartLocalStorage()
  }, [])
  
  useEffect(() => {
    updateLocalStorage()
    updateTotalItems(cart)
  }, [cart])

  function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  function updateTotalItems(productCart: IProduct[]) {
    if(!productCart) {
      return setCartQuantity(0)
    }
    const quantityItems = Object.values(productCart)
      .reduce((acc: number , { quantity = 0}: IProduct ) => acc + quantity, 0 )
    setCartQuantity(quantityItems)
  }

  function addCountProducts (data: IProduct, count: number) {
    if(!cart) {
      return setCart({ ...cart, [ data.id ]: {...data, quantity: count} })
    } 
    if(!cart[data.id]) {
      setCart({ ...cart, [ data.id ]: {...data, quantity: count} })
    } else {
      const quantity = cart[data.id].quantity || 0
      setCart({ ...JSON.parse(localStorage.getItem('cart') || ''), [ data.id ]: {...data, quantity: quantity + count} })
    }
  }

  function deleteProduct(product: IProduct) {
    const allCart = {...cart}
    delete allCart[product.id]
    setCart(allCart)
  }

  function saveCartLocalStorage() {
    try {
      setCart(JSON.parse(localStorage.getItem('cart') || '{}'))
    } catch (err: any) {
      console.log('Error: ', err.message);
    }
  }
  return {
    addCountProducts,
    deleteProduct,
  }
}