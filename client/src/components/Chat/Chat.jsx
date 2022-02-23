import './Chat.css';
import moment from 'moment';
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useUser } from '../../contexts/UserContext'
import {
    receiveMessage,
    sendGetAllMessages,
    sendLoginData,
    getAllMessages,
    sendMessage,
    getLoginData
} from '../../api/socketApi';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import { usePageVisibility } from 'react-page-visibility';


function Chat() {
    const { user } = useUser();
    const [msg, setMsg] = useState('');
    const [sendedMessages, setSendedMessages] = useState([])
    const [connectedUsers, setConnectedUsers] = useState({})
    const isVisible = usePageVisibility()

    let navigate = useNavigate()

    // document.addEventListener('visibilitychange', () => {
    //     document.title = document.visibilityState
    // })

    useEffect(() => {
        if (!user) {
            navigate('/')
        } else {
            sendLoginData(user);
            getLoginData((data) => {
                setConnectedUsers(data)
            })
            sendGetAllMessages()
            getAllMessages((data) => {
                setSendedMessages(data)
                // console.log(data);
            })
            receiveMessage((data) => {
                // console.log(data);
                document.visibilityState === 'hidden' && playSound()
                !isVisible && (data['unseen'] = true)
                setSendedMessages(prev => [...prev, data])
            })
        }
    }, [user, navigate, isVisible])

    function playSound() {
        const audio = new Audio('https://notificationsounds.com/storage/sounds/file-sounds-1233-elegant.mp3')
        audio.volume = 0.2
        return audio.play();
    }

    function _sendMessage(e) {
        e.preventDefault();
        let _msg = msg;
        _msg = _msg.trim()
        if (_msg.length !== 0) {
            let data = {
                user: user,
                msg: _msg,
                // time: Date.now()
                time: moment.now()
            }
            sendMessage(data)
            data['self'] = true
            setSendedMessages(prevState => [...prevState, data])
            // console.log(sendedMessages);
            setMsg('')
        }
    }

    if (user) {
        return (
            <div className='chatApp'>
                <Header />
                <div className="display">
                    <Sidebar connectedUsers={connectedUsers} />
                    <Messages sendedMessages={sendedMessages} />
                </div>
                <Input _sendMessage={_sendMessage} msg={msg} setMsg={setMsg} />
            </div>
        )
    } else {
        return (
            <></>
        )

    }
}

export default Chat