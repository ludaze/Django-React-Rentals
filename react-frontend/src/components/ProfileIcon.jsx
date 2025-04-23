import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import userIcon from '../assets/images/user-icon.webp'; // Import the user icon
import {LoginButton,LogoutButton} from './Buttons';
function ProfileIcon(props) {
    const isAuthenticated = props.isAuthenticated;
    let button ;
    
    if (isAuthenticated) {
        button = <LogoutButton />;
    } else {
        button = <LoginButton />;
    }
    return (
        <NavDropdown title={
                            <img
                            src= {userIcon} 
                            alt="User Icon"
                            style={{ height: '30px', width: '30px', borderRadius: '50%' }}
                            />
                        } id = "user-dropdown" align="end">

            
            <NavDropdown.Item href="#"><button className="btn">Profile</button></NavDropdown.Item>
            <NavDropdown.Item href="#">{button} </NavDropdown.Item>
        </NavDropdown>
    )
}

export default ProfileIcon;