import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function loadUserFromCache() {
            const user = localStorage.getItem('user');
            const session = localStorage.getItem('sessionTime');
            const now = new Date();
            const authIsValid = (now.getTime() < Number(session));

            if ((user !== undefined || user !== null) && authIsValid) {
                setUser(user);
                return
            }

            if (router.pathname === '/' && authIsValid) {
                router.push('/landing');
                return
            }

            router.push('/');
        }

        loadUserFromCache();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);