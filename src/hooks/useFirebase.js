import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);



    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handaleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handalePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handaleConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value);
    }



    const createNewUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            
    }

    const loginWithEmailPassword = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {

            }
            setIsLoading(false);
        });
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
            setLoggedIn(false);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => setIsLoading(false));
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {
            setDisplayName(result);
        }).catch((error) => {
            setError(error);
        });
    }


    return {
        user,
        error,
        logOut,
        signInWithGoogle,
        isLoading,
        setIsLoading,
        setUserName,
        setError,
        loggedIn,
        setLoggedIn,
        handleNameChange,
        handaleEmailChange,
        handalePasswordChange,
        handaleConfirmPasswordChange,
        createNewUser,
        loginWithEmailPassword,
        displayName,
        email,
        password,
        confirmPassword
    }
}

export default useFirebase;