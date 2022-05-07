import { createContext, useState, useEffect, useContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

//contexto para el usuario logueado
const UserContext = createContext([]);

export const useAuth = () => {
    const context = useContext(UserContext)
    if (!context) throw new Error('No hay auth provider')
    return context
}

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [errorSession, setErrorSession] = useState("");

    useEffect(() => {        
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);            
            if (currentUser == null) setUser({ email: '', password: '' })
        });
        return () => unsuscribe();
    }, []);

    const resetError = () => {
        setErrorSession("")
    }
    const cargarErrorSession = (error) => {
        if (error.code === "auth/invalid-email")
            setErrorSession("Formato de email Inválido")
        else
            if (error.code === "auth/user-not-found")
                setErrorSession("Usuario no encontrado")
            else
                if (error.code === "auth/weak-password")
                    setErrorSession("Password debe tener como mínimo 6 caracteres")
                else
                    if (error.code === "auth/email-already-in-use")
                        setErrorSession("Usuario existente, debe iniciar sesión")
                    else
                        if (error.code === "auth/wrong-password")
                            setErrorSession("Contraseña Inválida")
                        else
                            if (error.code === "auth/user-not-found")
                                setErrorSession("Usuario no registrado, debe crear cuenta")
                            else
                                if (error.code === "auth/internal-error")
                                    setErrorSession("Error interno, vuelva a intentar")
                                else
                                    alert('Error:' + error.code)
    }

    const submit = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            cargarErrorSession(error)
        }
    }

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            cargarErrorSession(error)
        }
    }

    const logout = async () => {
        await signOut(auth);
        setUser({ email: '', password: '' })
    }

    const data = {
        user,
        errorSession,
        resetError,
        submit,
        login,
        logout
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )

}

export { UserProvider }
export default UserContext