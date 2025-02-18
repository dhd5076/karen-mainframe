import { useState, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import ReactMarkdown from 'react-markdown';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/chat');
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: input }),
      });
      const data = await response.json();
      const botMessage = { sender: 'assistant', text: data.content };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInput('');
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full w-full">
        <div className="flex-1 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`mt-4 p-4 block rounded border-1 ${message.sender === 'assistant' ? '' : 'text-right'}`}>
              <ReactMarkdown className={`p-4${message.sender === 'Karen' ? 'bg-gray-500' : 'bg-blue-500'}`}>{message.text}</ReactMarkdown>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-300">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type a message..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChatPage;