import React, { useState } from 'react';
import ScrollableFeed from 'react-scrollable-feed';
import moment from 'moment';
import { useEffect } from 'react';


function Messages({ sendedMessages }) {
    const [localUser, setLocalUser] = useState({})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setLocalUser(user);
    }, [])

    return (
        <ScrollableFeed forceScroll={true} className="messages">
            {sendedMessages.map((data, i) => {
                // console.log(data); 
                return (<div key={i} className={`message ${localUser.id === data.user.id && 'self'}`}>
                    <div className="msgDetail">
                        <span className="userName">{data.user.userName}</span>
                        <span className="date">{moment.unix(data.time / 1000).format('HH:mm')}</span>
                    </div>
                    <div className="msgContent">
                        {data.msg}
                    </div>
                </div>)

            })}
        </ScrollableFeed>
    )
}

export default Messages