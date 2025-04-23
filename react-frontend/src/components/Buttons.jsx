import {React,useContext} from 'react';
import AuthContext from '../context/AuthContext';
export function LoginButton () {
    return (
        <button 
         className="btn"
         style={{color:'green', backgroundColor:'none', transition:'coloe 0.3s ease'}}
         onMouseEnter={(e => e.target.style.color = 'gray')}
         onMouseLeave={(e => e.target.style.color = 'green')}
        >
            Login
        </button>
    );
}

export function LogoutButton () {
    const {logoutUser} = useContext(AuthContext);
    
    return (
        <button 
            className="btn btn-danger"
            onClick={logoutUser}
            >
            Logout
        </button>
    );
}
