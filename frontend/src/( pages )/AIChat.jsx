import React, { useState } from 'react';
import { Search, Send, ChevronDown } from 'lucide-react';

const ChatMessage = ({ message, isAi }) => {
  return (
    <div className="flex items-start gap-2 mb-6">
      {isAi && <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0" />}
      <div className={`flex-1 ${isAi ? 'order-2' : 'order-1'}`}>
        <div className={`p-3 rounded-lg ${isAi ? 'bg-orange-100' : 'bg-gray-100'}`}>
          <p className="text-gray-700 text-sm">{message}</p>
        </div>
      </div>
      {!isAi && <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />}
    </div>
  );
};

const ChatHistory = ({ histories }) => {
  return (
    <div className="space-y-2">
      {histories.map((item, index) => (
        <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
          <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
          <p className="text-sm text-gray-600 truncate">{item}</p>
        </div>
      ))}
    </div>
  );
};

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  
  const timeCategories = {
    'Today': [
      'Help me understand quantum...',
      'What are the main features of...',
      'The events that led to World W...',
      'Can you provide tips to improv...',
      'Guide me through the process...',
      'Python for beginners. It is easy...'
    ],
    'Last week': [
      'Major causes of climate chang...',
      'Principles of supply & demand...',
      'Help me understand the...'
    ],
    'Last month': [
      'Process of programming in P...',
      'Forma skilled benefits and tim...'
    ]
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-orange-500">FikraSpace</h1>
        </div>
        
        <div className="mb-4 relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm"
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          {Object.entries(timeCategories).map(([category, items]) => (
            <div key={category} className="mb-4">
              <h3 className="text-xs text-gray-500 mb-2">{category}</h3>
              <ChatHistory histories={items} />
            </div>
          ))}
        </div>

        <div className="mt-4 p-2 bg-orange-50 rounded-lg">
          <p className="text-xs text-orange-600">+ New</p>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span>Courses</span>
            <span>Ask Edi</span>
            <span>Flashcards</span>
            <span>Practice Tests</span>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          <ChatMessage
            isAi={true}
            message="The main principles of evolution include natural selection, genetic drift, mutation, gene flow, and speciation."
          />
          <ChatMessage
            isAi={false}
            message="How does natural selection act in evolution?"
          />
          <ChatMessage
            isAi={true}
            message="Natural selection is a process where individuals with advantageous traits for their environment have a higher chance of surviving and reproducing. Over time, these beneficial traits become more common in a population, leading to evolutionary changes."
          />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type here"
              className="w-full p-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="absolute right-3 top-3 text-orange-500">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;