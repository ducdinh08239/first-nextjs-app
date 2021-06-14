import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getUserFromCookie, setUserCookie } from '../components/auth/userCookies'

export const CartContext = createContext({} as any);

export const CartContextProvider = ({ children }) => {
    var initAmount = 0;
    var initPrice = 0;
    var initProduct = [];

    const [totalAmount, setTotalAmount] = useState<number>(initAmount);
    const [totalPrice, setTotalPrice] = useState<number>(initPrice);
    const [totalProduct, setTotalProduct] = useState<any>(initProduct);

    useEffect(() => {
        if (totalAmount != 0 && totalProduct != null && totalProduct.length > 0) {
            localStorage.setItem("totalAmount", `${totalAmount}`);
            localStorage.setItem("totalPrice", `${totalPrice}`);
            localStorage.setItem("totalProduct", JSON.stringify(totalProduct));
        }
        if (parseInt(localStorage.getItem("totalAmount")) && JSON.parse(localStorage.getItem("totalProduct"))) {
            initAmount = parseInt(localStorage.getItem("totalAmount"));
            initPrice = parseInt(localStorage.getItem("totalPrice"));
            initProduct = JSON.parse(localStorage.getItem("totalProduct"));
        }
    }, [totalAmount, totalPrice, totalProduct])

    useEffect(() => {
        setTotalAmount(initAmount);
        setTotalPrice(initPrice);
        setTotalProduct(initProduct);
    }, [])

    return (
        <CartContext.Provider value={{ totalAmount, setTotalAmount, totalPrice, setTotalPrice, totalProduct, setTotalProduct }} >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext);
}