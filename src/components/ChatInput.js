import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../redux/actions";
import { v4 as uuidv4 } from 'uuid';

const ChatInput = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleInput = () => {
        if (input.trim === '') return;

        const newMessage = {
            id: uuidv4(),
            text: input,
            sender: 'user',
        };

        dispatch(sendMessage(newMessage));
        setInput('');

       
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleInput();
        }
    };

    return (
        <div className="chat-input">
            <input type="text" value={input} placeholder="Type Your Message..." onChange={(e) => setInput(e.target.value)} onKeyPress={handleKeyPress} />
            <button onClick={handleInput}>Send</button>
        </div>
    );
};

export default ChatInput;