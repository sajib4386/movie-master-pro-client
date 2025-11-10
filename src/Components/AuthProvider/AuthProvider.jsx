import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { AuthContext } from '../AuthContext/AuthContext';



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
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



    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }


    const logout = () => {
        return signOut(auth);
    };

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
        error,
        setError,
        createUser,
        signIn,
        googleLogin,
        logout,
        updateUser,
        loading,
        setLoading
    }


    return <AuthContext value={authData}>
        {children}
    </AuthContext>
}

export default AuthProvider