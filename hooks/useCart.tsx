import { useEffect, useState } from "react"
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
    console.log(cart)
  }

  function updateTotalItems(productCart: IProduct[]) {
    if(!productCart) {
      return setCartQuantity(0)
    }
    const quantityItems = Object.values(productCart)
      .reduce((acc: number , { quantity = 0}: IProduct ) => acc + quantity, 0 )
    setCartQuantity(quantityItems)
  }

  function addProduct(data: IProduct) {
    const product = cart
    console.log(product)

    if(!cart[data.id]) {
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
    console.log('cart aqui', cart)

    if(!cart) {
      return setCart({ ...cart, [ data.id ]: {...data, quantity: count} })
    } 
    if(!cart[data.id]) {
      setCart({ ...cart, [ data.id ]: {...data, quantity: count} })
    } else {
      const quantity = cart[data.id].quantity || 0
      setCart({ ...JSON.parse(localStorage.getItem('cart') || ''), [ data.id ]: {...data, quantity: quantity + count} })
    }
    // updateTotalItems()
  }

  function deleteProduct(product: IProduct) {
    console.log(product)
    const deletedProduct = Object.values(cart).filter((e) => e !== product)
    console.log(deletedProduct)
    setCart({...deletedProduct})
  }

  function saveCartLocalStorage() {
    try {
      setCart(JSON.parse(localStorage.getItem('cart') || '{}'))
    } catch (err: any) {
      console.log('Error: ', err.message);
    }
  }
  return {
    addProduct,
    addCountProducts,
    deleteProduct,
  }
}