import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(() => {
        const user = localStorage.getItem("chat-user");
        if (!user || user === "undefined" || user === "null") return null;
        try {
            return JSON.parse(user);
        } catch (e) {
            console.error("Error parsing chat-user from localStorage", e);
            localStorage.removeItem("chat-user");
            return null;
        }
    });
    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};