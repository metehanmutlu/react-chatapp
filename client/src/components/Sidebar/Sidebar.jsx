import React from 'react'
import ScrollableFeed from 'react-scrollable-feed'


function Sidebar({ connectedUsers }) {
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
                        return <li key={id}>{data.userName}</li>
                    })}
                </ScrollableFeed>
            </div>
        </div>
    )
}

export default Sidebar