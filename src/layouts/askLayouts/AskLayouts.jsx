import './askLayouts.css/'
import { Outlet } from 'react-router'
import { useState } from 'react';
import ChatList from '../../components/chatList/ChatList'

const AskLayouts = () => {
    
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='askLayouts '>
        <div className={`menu ${isOpen ? 'open' : 'closed'}`}>    
          {isOpen && ( <ChatList/> )}
          <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <box-icon name='chevrons-left' class='arrow-icon' size='15px' type ="solid" color='#E2E2E2'></box-icon> : 
                        <box-icon name='chevrons-right' class='arrow-icon' size='15px' type ="solid" color='#E2E2E2'></box-icon>}
          </button>
        </div>
        <div className='content'><Outlet/></div>
    </div>
  )
}

export default AskLayouts

