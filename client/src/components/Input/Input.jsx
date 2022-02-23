import React from 'react'


function Input({_sendMessage, msg, setMsg}) {
    return (
        <div className="input">
            <form onSubmit={_sendMessage}>
                <input
                    type="text"
                    value={msg}
                    onChange={(e) => { setMsg(e.target.value) }}
                    placeholder='Message...'
                />
                <button className='sendBtn' type='submit'>
                    <i className="fa-solid fa-paper-plane"></i>
                    Send
                </button>
            </form>
        </div>
    )
}

export default Input