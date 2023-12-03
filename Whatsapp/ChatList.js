import React from 'react';
import '../styles/ChatList.css';

const ChatList = ({ onSelectChat }) => {
  const chats = [
    { id: 1, name: 'Chat 1' },
    { id: 2, name: 'Chat 2' },
    { id: 3, name: 'Chat 3' },
    // Aggiungi altre chat se necessario
  ];

  return (
    <div className="chat-list-container">
      <ul>
        {chats.map((chat) => (
          <li key={chat.id} onClick={() => onSelectChat(chat.id)}>
            {chat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;