import React from 'react';
import '../styles/ChatWindow.css';

const ChatWindow = ({ chatId }) => {
  // Simulazione di dati di messaggi
  const messages = [
    { id: 1, text: 'Ciao!' },
    { id: 2, text: 'Come stai?' },
    // Aggiungi altri messaggi se necessario
  ];

  return (
    <div className="chat-window-container">
      <div className="header">Header della chat</div>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-box">Box di input per inviare messaggi</div>
    </div>
  );
};

export default ChatWindow;