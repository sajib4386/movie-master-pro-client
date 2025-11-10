import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../AuthContext/AuthContext';



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authData = {
        auth,
        user,
        setUser,
        createUser,
        signIn,
        googleLogin,
        loading,
        setLoading
    }


    return <AuthContext value={authData}>
        {children}
    </AuthContext>
}

export default AuthProvider