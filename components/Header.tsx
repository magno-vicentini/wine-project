import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import searchIconImage from '../public/headericons/search-icon.png'
import userIconImage from '../public/headericons/user-icon.png'

const Header: NextPage = () => {
  const [ searchIcon, setSearchIcon] = useState<boolean>(false)

  function changeButtonSearch () {
    if(!searchIcon) return setSearchIcon(true)
    return setSearchIcon(false)
  }

  return (
    <header>
      <h1>W/NE</h1>
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
       {
        !searchIcon ? '' : <input type="text" />
       }
      <Image 
        src={ searchIconImage } 
        alt="ícone de procura" 
        onClick={() => changeButtonSearch()}
      />
      <Image 
        src={ userIconImage }
        alt="botão para configurações de usuário"
      />
    </header>
  )
}

export default Header;