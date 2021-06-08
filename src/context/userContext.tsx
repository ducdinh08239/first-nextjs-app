import { createContext, useContext, useEffect, useState } from 'react';
import {getUserFromCookie} from '../components/auth/userCookies'

export const UserContext = createContext({} as any);

export const UserContextProvider = ({children} ) => {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        setUser(getUserFromCookie());
    }, [])


    return (
        <UserContext.Provider value={{user, setUser}} >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}