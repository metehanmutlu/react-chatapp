import React, { useEffect, useState } from 'react'
import ScrollableFeed from 'react-scrollable-feed'
import { useUser } from '../../contexts/UserContext';
import {
    sendLoginData,
    getLoginData,
    sendVisibile,
} from '../../api/socketApi';


function Sidebar() {
    const { user } = useUser();
    const [connectedUsers, setConnectedUsers] = useState({})
    const [visibility, setVisibility] = useState(true)

    // console.log('Sidebar Rendered');
    useEffect(() => {
        sendLoginData(user);
        getLoginData((data) => {
            setConnectedUsers(data)
        })

        function handleVisibilityChange() {
            if (document.visibilityState === "visible") {
                sendVisibile(true);
                setVisibility(true);
            } else {
                sendVisibile(false);
                setVisibility(false);
            }
        }

        document.addEventListener("visibilitychange", handleVisibilityChange, false);
    }, [user])

    return (
        <div className="sidebar">
            <div className="room">
                <i className="fa-solid fa-comments"></i>
                <span><b>Channel Name</b></span>
            </div>
            <div className="roomDetail">
                <span>Lahmaç_v31</span>
            </div>
            <div className="users">
                <div className="usersIcon">
                    <i className="fa-solid fa-users"></i>
                    <span><b>Users</b></span>
                </div>
                <ScrollableFeed forceScroll={true} className="usersDetail">
                    {Object.entries(connectedUsers).map(([id, data]) => {
                        return <li key={id} className='user'>
                            <i className={`fa-solid fa-circle avaible ${!data.visible ? 'busy' : ''}`} />
                            <span>{data.userName}</span>
                        </li>
                    })}
                </ScrollableFeed>
            </div>
        </div>
    )
}

export default Sidebar