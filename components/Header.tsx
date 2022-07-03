/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from '../styles/Header.module.css'
import searchIconImage from '../public/headericons/search-icon.png'
import userIconImage from '../public/headericons/user-icon.png'
import wineCart from '../public/headericons/winebox.png'
import wineImage from '../public/headericons/wine.svg'
import { getProducts, getProductsByName } from "../services";
import { useProduct } from "../context/productsContext";
import { useRouter } from 'next/router'

const Header: NextPage = () => {
  const [searchIcon, setSearchIcon] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const router = useRouter()
  const { 
      setProducts, 
      setNumberOfProducts, 
      setProductsData, 
      setTypeFilter,
      cartQuantity,
    } = useProduct()

  function changeButtonSearch () {
    if(!searchIcon) return setSearchIcon(true)
    return setSearchIcon(false)
  }

  async function setProductsByName () {
    if(name === '') {
      const allProducts = await getProducts(1)
      setProducts(allProducts.items)
      setProductsData(allProducts)
      setNumberOfProducts(allProducts.totalItems)
      setTypeFilter({ type:'global', filter:'' })
    }
    const filteredName = await getProductsByName(1, name)
    setProducts(filteredName.items)
    setProductsData(filteredName)
    setNumberOfProducts(filteredName.totalItems)
    setTypeFilter({ type:'name', filter:name })
  }

  useEffect(() => {
    setProductsByName()
  }, [name])

  return (
    <header className={ styles.header_container}>
      <Image src={ wineImage } alt="Logo-wine" className={styles.logo_image}/>
      <nav>
        <Link href="/club">
          <a>Clube</a>
        </Link>
        <Link href="/">
          <a>Loja</a>
        </Link>
        <Link href="/producers">
          <a>Produtores</a>
        </Link>
        <Link href="/offers">
          <a>Ofertas</a>
        </Link>
        <Link href="/events">
          <a>Eventos</a>
        </Link>
      </nav>
      <div className={ styles.header_icons_container }>
        {
          !searchIcon ? '' : (
            <input 
              type="text" 
              onChange={ ({ target }) => setName(target.value)}
              data-test="input_filter_name"
            />
          )
        }
        <Image 
          src={ searchIconImage } 
          className={ styles.header_icons}
          data-test="icon_filter_name"
          alt="ícone de procura" 
          onClick={() => changeButtonSearch()}
          width={40}
          height={40}
        />
        <Image 
          src={ userIconImage }
          className={ styles.header_icons}
          alt="botão para configurações de usuário"
          width={40}
          height={40}
        />     
        <div 
          className={ styles.cart_container} 
          onClick={() => router.push('/cart')}
          data-test='button_cart'
        >
          <Image 
            src={ wineCart } 
            className={ styles.header_icons}
            alt="Winebox" 
            width={40}
            height={40}
          />
          <div 
            className={ styles.cart_quantity }
            data-test="quantity_cart"
          >
            {cartQuantity}
          </div>
        </div>   
      </div>
    </header>
  )
}

export default Header;