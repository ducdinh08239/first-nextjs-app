import '../../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from 'react'
import { UserContextProvider } from '../../src/context/userContext'
import initFirebase from '../components/firebase/initFirebase'
import ThemeContextProvider from '../context/themeContext'


const MyApp: React.FC<any> = ({ Component, pageProps }) => {
  // initFirebase()
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ThemeContextProvider>
  )
}

export default MyApp
