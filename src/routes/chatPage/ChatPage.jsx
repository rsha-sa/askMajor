import './chatPage.css'
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef} from 'react'
import NewPrompt from '../../components/newPrompt/NewPrompt.jsx';

const ChatPage = () => {

  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [title, setTitle]= useState('');
  const [input, setInput] = useState(''); 

  const endRef = useRef(null);
  
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages, input]);

  useEffect(() => {
    const chats = JSON.parse(localStorage.getItem('chats')) || [];
    const currentChat = chats.find(c => c.id === id);
    if (currentChat) {
      setMessages(currentChat.messages || []);
      setTitle(currentChat.title || '');
    }
  }, [id]);

  
  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { sender: 'user', text: input },
      { sender: 'bot', text: `Fetching information for: "${input}"... (placeholder)` }
    ];

    setMessages(newMessages);
    setInput(''); 

    const chats = JSON.parse(localStorage.getItem('chats')) || [];
    const updatedChats = chats.map(chat =>
      chat.id === id
        ? { ...chat, messages: newMessages }
        : chat
    );

    localStorage.setItem('chats', JSON.stringify(updatedChats));
  };

  return (
    <div className='chatPage'>
      <div className='wrapper'>
        <div className="chat">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        <div ref={endRef}></div>
        </div >
        <NewPrompt 
          input={input}
          setInput={setInput}
          handleSend={handleSend}
        />
        </div>
      </div>
  );
};
export default ChatPage;
