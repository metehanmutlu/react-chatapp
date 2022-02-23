import { createContext, useState, useContext } from "react";

const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {
    const [sendedMessages, setSendedMessages] = useState([])

    const values = {
        sendedMessages,
        setSendedMessages
    }

    return (
        <MessagesContext.Provider value={values}>
            {children}
        </MessagesContext.Provider>
    )
}



export const useMessages = () => useContext(MessagesContext);