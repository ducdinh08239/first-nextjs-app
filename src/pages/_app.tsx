import '../../styles/globals.css'
import 'tailwindcss/tailwind.css'
import React from 'react'
import { UserContextProvider } from '../../src/context/userContext'


const MyApp: React.FC<any> = ({ Component, pageProps }) => {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp
