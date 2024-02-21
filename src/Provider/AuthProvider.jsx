import {  createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {  getAuth, GoogleAuthProvider, onAuthStateChanged,  signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true)



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user', currentUser, user);
            setUser(currentUser);
            setloading(false)
        });
        return () => {
            unSubscribe();
        }

    }, [])

  // logout 
  const logOut =()=>{
    setloading(true)
    return signOut(auth)
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
}

const googleSignIn = () =>{
    setloading(true)
   return signInWithPopup(auth, provider)

}
const authInfo = {
    user,
    logOut ,
    loading,
    googleSignIn
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;