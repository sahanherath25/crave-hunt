import {createContext, useState} from "react";
import {loginRequest, registerRequest} from "../Services/authentication/services";
import {auth} from "../Services/firebase/firebase";
import {getAuthError} from "../utils/firebaseErrorMessages";

const AuthenticationContext = createContext()

const AuthenticationProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)


    auth.onAuthStateChanged( (usr) => {

        if (usr) {
            setUser(user);
            // console.log("User logged in IS ",user)
            setIsLoading(false)
        } else {
            // setIsLoading(true)
            setUser(null)
            setIsLoading(false)

        }
    });

    const onLogin=async (email,password)=>{
        setIsLoading(true)
        setError(false)
        try {
            const user=await loginRequest(email,password)
            // console.log("HU HU USER IS ",user)
            setUser(user)
            return user
        }catch (e) {
            const error=getAuthError(e.code)
            setError(error)
            // TODO Propagating the Error to the caller
            throw e

        }finally {
            setIsLoading(false)
        }
    }

    const onRegister=async (email,password)=>{
        setError(false)
        setIsLoading(true)
        try {
            const user=await registerRequest(email,password)
            setUser(user)
            return user
        }catch (e) {
            const error=getAuthError(e.code)
            setError(error)
            // TODO Propagating the Error to the caller
            throw e

        }finally {
            setIsLoading(false)
        }
    }

    const signOut=()=>{

        auth.signOut()
    }


    return (
        <AuthenticationContext.Provider value={{
            isAuthenticated:!!user,
            isLoading,
            error,
            onLogin,
            onRegister,
            signOut,
            user
        }}>
            {children}
        </AuthenticationContext.Provider>
    )

}

export {AuthenticationContext,AuthenticationProvider}
