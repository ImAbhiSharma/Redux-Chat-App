import React from 'react';
import ChatList from './components/ChatList';
import ChatInput from './components/ChatInput';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Chat Application</h1>
      <div className='chat-container'>
        <ChatList />
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
