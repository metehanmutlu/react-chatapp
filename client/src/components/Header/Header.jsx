import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'


function Header() {
    let navigate = useNavigate();
    const { setUser } = useUser();

    return (
        <div className="header">
            <div className="logo">
                <i className="fa-solid fa-message"></i>
                <span>ChatAppat</span>
            </div>
            <div className="leave">
                <button onClick={() => {
                    navigate('/');
                    setUser(null);
                }}>Leave Room</button>
            </div>
        </div>
    )
}

export default Header