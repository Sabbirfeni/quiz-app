import React, { useState, useContext, useEffect } from 'react';
import '../firebase.js';

import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, 
    updateProfile
    } from 'firebase/auth';
import Loader from '../components/Loader/Loader.jsx';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [ loading, setLoading ] = useState(true);
    const [ currentUser, setCurrentUser ] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [])

    // Sign Up function
    async function signup(email, password, userName) {
        setLoading(true)
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // Update profile
        await updateProfile(auth.currentUser, {
            displayName: userName
        })

        const user = auth.currentUser;

        // Ser current user
        setCurrentUser({
            ...user
        })
        
    }

    // Login Function
    function login(email, password) {
        setLoading(true)
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    // Logout function
    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}