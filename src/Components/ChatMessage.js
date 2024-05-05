import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
      <>
        <div className="flex items-center shadow-sm p-2">
          <img
            className="w-6 h-6 "
            alt="coment-logo"
            src="https://static.thenounproject.com/png/1768489-200.png"
          />
          <span className="font-bold px-2">{name}</span>
          <span>{message}</span>
            </div>
            
      </>
    );
};

export default ChatMessage