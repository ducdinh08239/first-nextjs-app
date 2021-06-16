import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getUserFromCookie, setUserCookie } from '../components/auth/userCookies'

export const UserContext = createContext({} as any);

export const UserContextProvider = ({ children }) => {
    const [userSession, setUserSession] = useState<any>(null);

    useMemo(() => {
        if (userSession) {
            setUserCookie(userSession);
        }
    }, [userSession])

    useMemo(() => {
        if(getUserFromCookie()){
            setUserSession(getUserFromCookie());
        }
    }, [])

    return (
        <UserContext.Provider value={{ userSession, setUserSession }} >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}