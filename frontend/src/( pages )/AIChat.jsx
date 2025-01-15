import React, { useState, useRef, useEffect } from 'react';
import { Send, RotateCw, Bot, User, Copy, Check, Search, Trash2, RefreshCw } from 'lucide-react';
import axios from 'axios';
import NavigationBar from '../NavigationBar';
import Breadcrumb from '../( components )/Breadcrumb';

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

const ChatHistory = ({ histories, onSelectChat, onDeleteChat, searchQuery }) => {
  const filteredHistories = histories.filter(chat => 
    chat.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-2">
      {filteredHistories.map((chat, index) => (
        <div 
          key={chat.id} 
          className="p-2 hover:bg-gray-100 rounded cursor-pointer relative group"
          onClick={() => onSelectChat(chat.id)}
        >
          <p className="text-sm text-gray-600 truncate pr-8">{chat.preview}</p>
          <span className="text-xs text-gray-400">{new Date(chat.timestamp).toLocaleString()}</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onDeleteChat(chat.id);
            }}
            className="absolute right-2 top-2 p-1 opacity-0 group-hover:opacity-100 hover:text-red-500"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

const ChatMessage = ({ message, isAi, modelOutput }) => {
  const [copied, setCopied] = useState(false);
  const [showModelOutput, setShowModelOutput] = useState(false);

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
          {isAi && modelOutput && (
            <>
              <button
                onClick={() => setShowModelOutput(!showModelOutput)}
                className="mt-2 text-xs text-orange-500 hover:text-orange-600"
              >
                {showModelOutput ? 'Hide Model Output' : 'Show Model Output'}
              </button>
              {showModelOutput && (
                <div className="mt-2 p-2 bg-gray-50 rounded text-xs text-gray-600 font-mono">
                  <pre>{JSON.stringify(modelOutput, null, 2)}</pre>
                </div>
              )}
            </>
          )}
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
  const [allChats, setAllChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentChatId, setCurrentChatId] = useState(null);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Load chats from localStorage
    const savedChats = JSON.parse(localStorage.getItem('chats') || '[]');
    setAllChats(savedChats);
  }, []);

  const saveChatsToStorage = (chats) => {
    localStorage.setItem('chats', JSON.stringify(chats));
  };

  const createNewChat = () => {
    const newChatId = Date.now().toString();
    setCurrentChatId(newChatId);
    setChatHistory([]);
    setAllChats(prev => {
      const newChats = [{
        id: newChatId,
        preview: 'New Conversation',
        timestamp: Date.now(),
        messages: []
      }, ...prev];
      saveChatsToStorage(newChats);
      return newChats;
    });
  };

  const handleSelectChat = (chatId) => {
    const chat = allChats.find(c => c.id === chatId);
    if (chat) {
      setCurrentChatId(chatId);
      setChatHistory(chat.messages);
    }
  };

  const handleDeleteChat = (chatId) => {
    setAllChats(prev => {
      const newChats = prev.filter(c => c.id !== chatId);
      saveChatsToStorage(newChats);
      return newChats;
    });
    if (currentChatId === chatId) {
      setCurrentChatId(null);
      setChatHistory([]);
    }
  };

  const updateChatPreview = (chatId, messages) => {
    setAllChats(prev => {
      const newChats = prev.map(chat => {
        if (chat.id === chatId) {
          return {
            ...chat,
            preview: messages[messages.length - 1].message.substring(0, 50) + '...',
            timestamp: Date.now(),
            messages: messages
          };
        }
        return chat;
      });
      saveChatsToStorage(newChats);
      return newChats;
    });
  };

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    if (message.trim() === '') return;
    
    if (!currentChatId) {
      createNewChat();
    }

    const newMessage = { 
      message: message.trim(), 
      isAi: false,
      timestamp: Date.now()
    };

    const updatedHistory = [...chatHistory, newMessage];
    setChatHistory(updatedHistory);
    updateChatPreview(currentChatId, updatedHistory);
    setMessage('');
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://127.0.0.1:5000/chat_with_ai', {
        query: message,
        class_id: 1
      });

      const aiResponse = {
        message: response.data.response,
        isAi: true,
        timestamp: Date.now(),
        modelOutput: {
          confidence: response.data.confidence,
          context: response.data.context,
          model_name: response.data.model_name,
          processing_time: response.data.processing_time,
          // Add any other model outputs you want to store
        }
      };

      const finalHistory = [...updatedHistory, aiResponse];
      setChatHistory(finalHistory);
      updateChatPreview(currentChatId, finalHistory);
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to get response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <NavigationBar />
      <Breadcrumb />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 border-r border-gray-100 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <button
              onClick={createNewChat}
              className="w-full mb-4 p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              New Chat
            </button>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chats..."
                className="w-full p-2 pl-8 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-2 top-3" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <ChatHistory 
              histories={allChats}
              onSelectChat={handleSelectChat}
              onDeleteChat={handleDeleteChat}
              searchQuery={searchQuery}
            />
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto bg-gray-50">
            {error && (
              <div className="p-4 bg-red-100 text-red-700 flex items-center justify-between">
                <span>{error}</span>
                <button onClick={() => setError(null)}>
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            )}
            {chatHistory.length === 0 ? (
              <WelcomeScreen />
            ) : (
              <div className="p-6">
                {chatHistory.map((chat, index) => (
                  <ChatMessage 
                    key={index} 
                    message={chat.message} 
                    isAi={chat.isAi}
                    timestamp={chat.timestamp}
                  />
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
                  className="w-full p-4 pr-16 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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