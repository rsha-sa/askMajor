import './chatList.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem('chats')) || [];
    setChats(storedChats);
  }, []);

  const handleDelete = (id) => {
    const updatedChats = chats.filter(chat => chat.id !== id);
    localStorage.setItem('chats', JSON.stringify(updatedChats));
    setChats(updatedChats);
  };

  return (
    <div className={`chatList ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <>
          <div className="title-button">
            <span className='title'>Chat History</span>
            <Link to="/">
              <button className="new-chat-button">
                <box-icon name='message-square-add' class='plus-icon' color='#e2e2e2cf' size='25px' ></box-icon>
              </button>
            </Link>
          </div>

          <hr />

          <div className='list'>
            {chats.length === 0 ? (
              <p className="no-chats">No chats yet.</p>
            ) : (
              chats.map((chat) => (
                <div className="chat-item" key={chat.id}>
                  <Link to={`/chat/${chat.id}`}>
                    {chat.title || 'Untitled Chat'}
                  </Link>
                  <button className="delete-button"  onClick={() => handleDelete(chat.id)}>
                    <box-icon name='trash' class='trash-icon' color='#e2e2e2cf' size='18px' ></box-icon>                  
                  </button>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ChatList;
