import { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext({
    authtoken: '',
    authenticated: false,
    authenticate: (authToken) => {},
    logout: () => {}
});

export const AuthContextProvider = ({children}) => {
    const [authToken, setAuthToken] = useState('');

    const authTokenHandler = (authToken) => {
        if(authToken){
            AsyncStorage.setItem('token', authToken);
            setAuthToken(authToken);
        }
    }

    const logoutHandler = () => {
        AsyncStorage.removeItem('token');
        setAuthToken(null)
    }
    return <AuthContext.Provider value={{authtoken: authToken, authenticated: !!authToken, authenticate: authTokenHandler, logout: logoutHandler}}>{children}</AuthContext.Provider>
}