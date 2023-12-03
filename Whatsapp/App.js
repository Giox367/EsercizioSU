import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import '../styles/App.css';

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatSelection = (chatId) => {
    setSelectedChat(chatId);
  };

  return (
    <div className="app-container">
      <ChatList onSelectChat={handleChatSelection} />
      {selectedChat ? (
        <ChatWindow chatId={selectedChat} />
      ) : (
        <div className="empty-chat-window">Seleziona una chat</div>
      )}
    </div>
  );
};

export default App;