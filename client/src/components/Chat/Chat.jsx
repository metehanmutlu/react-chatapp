import './Chat.css';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useUser } from '../../contexts/UserContext'
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';


function Chat() {
    const { user } = useUser();

    let navigate = useNavigate()

    console.log('Chat Rendered');
    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user, navigate])

    if (user) {
        return (
            <div className='chatApp'>
                <Header />
                <div className="display">
                    <Sidebar />
                    <Messages />
                </div>
                <Input />
            </div>
        )
    } else {
        return (
            <></>
        )

    }
}

export default Chat