import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/NotFound.module.css'
import Header from './Header'

const NotFound: NextPage = () => {
  return (
    <div>
      <Header />
      <div className={ styles.container_return }>
        <span>&#60;</span>
        <Link href="/">
          <button className={ styles.button_return }>Voltar</button>
        </Link>
      </div>
      <div className={ styles.container }>
        Page Not Implemented
      </div>
    </div>
  )
}

export default NotFound;