import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getUserFromCookie, setUserCookie } from '../components/auth/userCookies'

export const CartContext = createContext({} as any);

export const CartContextProvider = ({ children }) => {
    const [amount, setAmount] = useState(0)

    return (
        <CartContext.Provider value={{ amount, setAmount }} >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext);
}