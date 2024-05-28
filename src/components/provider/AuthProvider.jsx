import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../../firebase/firebase.config";

const auth=getAuth(app);
export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    
    const [loading,setLoading]=useState(true);


    //create user
    const createUSer=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const userInfo={
     createUSer, loading, signInUser,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;