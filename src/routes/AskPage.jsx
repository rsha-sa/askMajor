import './chatPage/chatPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewPrompt from '../components/newPrompt/NewPrompt.jsx';


const AskPage = () => {

  const navigate = useNavigate();

  const [input, setInput] = useState('');

  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about KAU majors.' }
  ]);

  const handleSubmit = (e) => {
      if (!input.trim()) return;

      const newChatId = Date.now().toString();
      const userMsg = { sender: 'user', text: input };
      const AIMsg = {
        sender: 'bot',
        text: `Fetching information for: "${input}"... (placeholder)`
      };

      const newMessages = [...messages, userMsg, AIMsg];
      setMessages(newMessages);

      const chats = JSON.parse(localStorage.getItem('chats')) || [];
      const newChat = {
        id: newChatId,
        title: input,
        messages: newMessages
      };
      localStorage.setItem('chats', JSON.stringify([...chats, newChat]));

 
      navigate(`/chats/${newChatId}`);

      
      setInput('');
    };

  return (
    <div className="chatPage">
      <div className='wrapper'>
        <div className="chat">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
        </div>
        <NewPrompt 
            input={input}
            setInput={setInput}
            handleSend={handleSubmit}
          />
        </div>
      </div>
  );
};

export default AskPage;