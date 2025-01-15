import React, { useState, useRef, useEffect } from 'react';
import { Send, RotateCw, Bot, User, Copy, Check, Search } from 'lucide-react';
import axios from 'axios';
import NavigationBar from '../NavigationBar';

const WelcomeScreen = () => (
  <div className="flex flex-col items-center justify-center h-full bg-white">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">AI-powered Chat System</h1>
    <p className="text-lg text-gray-600 mb-8">Start a conversation to begin your AI-powered learning journey</p>
    <Bot className="w-16 h-16 text-orange-500 mb-4" />
  </div>
);

const TypingIndicator = () => (
  <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg max-w-[100px]">
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
    </div>
  </div>
);

const ChatHistory = ({ histories }) => (
  <div className="space-y-2">
    {histories.map((chat, index) => (
      <div key={index} className="p-2 hover:bg-gray-100 rounded cursor-pointer">
        <p className="text-sm text-gray-600 truncate">{chat.preview}</p>
        <span className="text-xs text-gray-400">{chat.date}</span>
      </div>
    ))}
  </div>
);

const ChatMessage = ({ message, isAi }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className={`flex items-start gap-4 mb-6 ${isAi ? 'justify-start' : 'justify-end'}`}>
      {isAi && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      <div className={`flex-1 max-w-[80%] relative group`}>
        <div className={`p-4 rounded-2xl ${
          isAi 
            ? 'bg-white border border-gray-200 shadow-sm' 
            : 'bg-gradient-to-br from-orange-500 to-orange-600 text-white'
        }`}>
          <p className={`text-sm ${isAi ? 'text-gray-700' : 'text-white'}`}>{message}</p>
        </div>
        {isAi && (
          <button
            onClick={handleCopy}
            className="absolute right-2 top-2 p-1 rounded-full bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-gray-500" />
            )}
          </button>
        )}
      </div>
      {!isAi && (
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
          <User className="w-5 h-5 text-gray-600" />
        </div>
      )}
    </div>
  );
};

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chatHistories] = useState([
    { preview: "Previous conversation about evolution", date: "Today" },
    { preview: "Discussion about natural selection", date: "Yesterday" },
    { preview: "Chat about genetic drift", date: "2 days ago" }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    if (message.trim() === '') return;

    const newMessage = { message: message.trim(), isAi: false };
    setChatHistory(prev => [...prev, newMessage]);
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:5000/chat_with_ai', {
        query: message,
        class_id: 1
      });

      const aiResponse = response.data.response;
      setChatHistory(prev => [...prev, { message: aiResponse, isAi: true }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setChatHistory(prev => [...prev, { 
        message: "Sorry, I'm having trouble connecting. Please try again.", 
        isAi: true 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <NavigationBar />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search chats..."
                className="w-full p-2 pl-8 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-2 top-3" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <ChatHistory histories={chatHistories} />
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-50">
            {chatHistory.length === 0 ? (
              <WelcomeScreen />
            ) : (
              <div className="p-6">
                {chatHistory.map((chat, index) => (
                  <ChatMessage key={index} message={chat.message} isAi={chat.isAi} />
                ))}
                {loading && <TypingIndicator />}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <form onSubmit={handleSendMessage}>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full p-4 pr-16 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  disabled={loading}
                />
                <button 
                  type="submit"
                  disabled={loading || message.trim() === ''}
                  className={`absolute right-2 p-2 rounded-full ${
                    loading || message.trim() === '' 
                      ? 'text-gray-400 bg-gray-100' 
                      : 'text-white bg-orange-500 hover:bg-orange-600'
                  }`}
                >
                  {loading ? <RotateCw className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;