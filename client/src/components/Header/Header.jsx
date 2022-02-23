import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useNotification } from '../../contexts/NotificationContext';
import { useUser } from '../../contexts/UserContext'


function Header() {
    let navigate = useNavigate();
    const { setUser } = useUser();
    const { notification, setNotification } = useNotification(true)

    
    return (
        <div className="header">
            <div className="logo">
                <i className="fa-solid fa-message"></i>
                <span>ChatAppat</span>
            </div>
            <label className='switch-label'>
                <span>Notification</span>
                <input onChange={() => { setNotification(!notification) }} className="apple-switch" type="checkbox" checked={notification} />
            </label>
            {/* <span style={{ fontSize: '12px' }}>Notification</span> */}
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