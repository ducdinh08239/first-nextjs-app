import '../../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from 'react'
import { UserContextProvider } from '../../src/context/userContext'
import  initFirebase from '../components/firebase/initFirebase'


const MyApp: React.FC<any> = ({ Component, pageProps }) => {
  // initFirebase()
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp
