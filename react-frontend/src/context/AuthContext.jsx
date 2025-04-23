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

    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = () => {
            const token = localStorage.getItem("authTokens");
            if (token) {
                console.log("token",authTokens);
                setAuthTokens(token);
                setUser(jwtDecode(token));
                setIsAuthenticated(true);
            }
            else {
                console.log("nottoken",authTokens);
                setIsAuthenticated(false);
            }
            setLoading(false);
        };
        checkAuthStatus();
    },[])
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
            setAuthTokens(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            setIsAuthenticated(true);
            console.log(data);
            console.log("success");
            setTimeout(() => navigate('/dashboard'),2000);

        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");      
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ loginUser, logoutUser, authTokens, user ,isAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
