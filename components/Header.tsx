import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from '../styles/Header.module.css'
import searchIconImage from '../public/headericons/search-icon.png'
import userIconImage from '../public/headericons/user-icon.png'
import wineImage from '../public/headericons/wine.svg'
import headerIcons from '../public/headericons/header-sprite.svg'

const Header: NextPage = () => {
  const [ searchIcon, setSearchIcon] = useState<boolean>(false)

  function changeButtonSearch () {
    if(!searchIcon) return setSearchIcon(true)
    return setSearchIcon(false)
  }

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
      <div>
        {
          !searchIcon ? '' : <input type="text" />
        }
        <Image 
          src={ searchIconImage } 
          alt="ícone de procura" 
          onClick={() => changeButtonSearch()}
          width={20}
          height={20}
        />
        <Image 
          src={ userIconImage }
          alt="botão para configurações de usuário"
          width={20}
          height={20}
        />
      </div>
      <div className={ styles.cart_button}>
        <Image 
          src={ headerIcons } 
          alt="Winebox" 
          className={ styles.cart_icon}
          objectPosition="relative"
        />
      </div>
    </header>
  )
}

export default Header;