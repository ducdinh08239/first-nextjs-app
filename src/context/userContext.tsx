import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getUserFromCookie, setUserCookie } from '../components/auth/userCookies'

export const UserContext = createContext({} as any);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    useMemo(() => {
        setUser(getUserFromCookie());
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}