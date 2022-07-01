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

const Header: NextPage = () => {
  const [searchIcon, setSearchIcon] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const { setProducts, setNumberOfProducts } = useProduct()

  function changeButtonSearch () {
    if(!searchIcon) return setSearchIcon(true)
    return setSearchIcon(false)
  }

  async function setProductsByName () {
    if(name === '') {
      const allProducts = await getProducts()
      setProducts(allProducts.items)
      setNumberOfProducts(allProducts.totalItems)
    }
    const filteredName = await getProductsByName(name)
    setProducts(filteredName.items)
    setNumberOfProducts(filteredName.totalItems)
  }

  useEffect(() => {
    setProductsByName()
  }, [name])

  return (
    <header className={ styles.header_container}>
      <Image src={ wineImage } alt="Logo-wine" className={styles.logo_image}/>
      <nav>
        <Link href="/clube">
          <a>Clube</a>
        </Link>
        <Link href="/">
          <a>Loja</a>
        </Link>
        <Link href="/produtores">
          <a>Produtores</a>
        </Link>
        <Link href="/ofertas">
          <a>Ofertas</a>
        </Link>
        <Link href="/eventos">
          <a>Eventos</a>
        </Link>
      </nav>
      <div className={ styles.header_icons_container }>
        {
          !searchIcon ? '' : <input type="text" onChange={ ({ target }) => setName(target.value)}  />
        }
        <Image 
          src={ searchIconImage } 
          className={ styles.header_icons}
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
        <Image 
          src={ wineCart } 
          className={ styles.header_icons}
          alt="Winebox" 
          width={40}
          height={40}
        />
      </div>
    </header>
  )
}

export default Header;