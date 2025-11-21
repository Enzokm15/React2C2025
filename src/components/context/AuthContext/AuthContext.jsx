import { createContext, useContext, useState } from "react";
import { USUARIO } from "../../../utils/constantes";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = (username, password) => {
        //comparar
        const isSameUsername = username === USUARIO.username;
        const isSamePassword = password === USUARIO.password;

        if (isSameUsername && isSamePassword) {
            setUser({ username });
            return true
        } else {
            console.log("Credenciales inválidas");
            return false;
        }

    };

    const logout = () => {
        setUser(null);
    };

    const isAuthenticated = !!user; //se actualiza cuando cambia user

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};