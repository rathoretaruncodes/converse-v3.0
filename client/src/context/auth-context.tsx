//to get the auth state as a globalstate, we create a context
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

type AuthUserType = {
    id: string;
    fullName: string;
    email: string;
    profilePicture: string;
    gender: string;
};

const AuthContext = createContext<{
    authUser: AuthUserType | null;
    setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
    isLoading: boolean;
}>({
    authUser: null,
    setAuthUser: () => {},
    isLoading: true,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }: { children:ReactNode }) => {
    const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAuthUser = async () => {
            try {
                const res = await fetch("http://localhost:5001/api/auth/me")
                const data = await res.json();
                if (!res.ok) {
                    throw new Error (data.message);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchAuthUser();
    }, []);
    return (
        <AuthContext.Provider
            value={{
                authUser,
                isLoading,
                setAuthUser, 
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
