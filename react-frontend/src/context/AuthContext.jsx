import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";  // Corrected to default import
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => 
        localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens"))
        : null
    );

    const [user, setUser] = useState(() => 
        localStorage.getItem("authTokens")
        ? jwtDecode(localStorage.getItem("authTokens"))
        : null
    );

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const loginUser = async (email, password) => {
        const response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();
        console.log(data);

        if (response.status === 200) {
            console.log(data);
        }
    };

    return (
        <AuthContext.Provider value={{ loginUser, authTokens, user }}>
            {children}
        </AuthContext.Provider>
    );
};
