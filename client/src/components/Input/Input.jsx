import React, { useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import moment from 'moment'
import {
    sendMessage,
} from '../../api/socketApi';
import { useMessages } from '../../contexts/MessagesContext';


function Input() {
    const { user } = useUser();
    const [msg, setMsg] = useState('');
    const { setSendedMessages } = useMessages()


    // console.log('Input Rendered');
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
            e.target.children[0].focus()
        }
    }

    return (
        <div className="input">
            <form onSubmit={_sendMessage}>
                <input
                    type="text"
                    value={msg}
                    onChange={(e) => { msg.length < 2000 && setMsg(e.target.value) }}
                    placeholder='Message...'
                    className='textInput'
                />
                <button className='sendBtn' type='submit'>
                    <i className="fa-solid fa-paper-plane"></i>
                    Send
                </button>
            </form>
        </div>
    )
}

export default React.memo(Input)