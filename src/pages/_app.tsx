import '../../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from 'react'
import { UserContextProvider } from '../../src/context/userContext'
import initFirebase from '../components/firebase/initFirebase'
import ThemeContextProvider from '../context/themeContext'
import { CartContextProvider } from '../context/cartContext'

const MyApp: React.FC<any> = ({ Component, pageProps }) => {
  // initFirebase()
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <CartContextProvider>
        <Component {...pageProps} />
        </CartContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  )
}

export default MyApp
