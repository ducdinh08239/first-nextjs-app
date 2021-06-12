import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getUserFromCookie, setUserCookie } from '../components/auth/userCookies'

export const CartContext = createContext({} as any);

export const CartContextProvider = ({ children }) => {
    const [totalAmount, setTotalAmount] = useState(0)

    const [totalProduct, setTotalProduct] = useState([]);

    return (
        <CartContext.Provider value={{ totalAmount, setTotalAmount, totalProduct, setTotalProduct }} >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext);
}