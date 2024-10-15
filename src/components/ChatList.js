import React from "react";
import { useSelector } from "react-redux";
import Message from './Message';

const ChatList = () => {
    const messages = useSelector((state) => state.messages);

    return (
        <div className="chat-list">
            {messages.length === 0 ? (
                <p>No messages yet. Start the conversation!</p>
            ) : (
                messages.map((msg) => <Message key={msg.id} message={msg} />)
            )}
        </div>
    );
};

export default ChatList;