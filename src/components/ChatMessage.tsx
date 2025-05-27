
import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex items-start space-x-3 ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        message.isUser ? 'bg-green-500' : 'bg-blue-500'
      }`}>
        {message.isUser ? (
          <User className="w-4 h-4 text-white" />
        ) : (
          <Bot className="w-4 h-4 text-white" />
        )}
      </div>
      
      <div className={`max-w-xs lg:max-w-md xl:max-w-lg ${message.isUser ? 'items-end' : 'items-start'} flex flex-col`}>
        <div className={`rounded-lg p-3 shadow-sm ${
          message.isUser 
            ? 'bg-green-500 text-white rounded-br-none' 
            : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
        }`}>
          <p className="text-sm whitespace-pre-wrap">{message.text}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1 px-1">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
};
