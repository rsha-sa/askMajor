import { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about KAU majors.' },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([
      ...messages,
      { sender: 'user', text: input },
      { sender: 'bot', text: `Fetching information for: "${input}"... (placeholder)` },
    ])
    setInput('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  const suggestions = [
    'Compare Computer Science and Information Systems',
    'What is the GPA requirement for Medicine?',
    'Career paths for Electrical Engineering',
  ]

  return (
    <div id="root">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Saved Chats</h2>
        <button>Computer Science vs IS</button>
        <button>Path for Architecture</button>
      </div>

      {/* Main Area */}
      <div className="main">
        {/* Header */}
        <div className="header">
          <img src="/KAU_logo.png" alt="KAU logo" />
          <div className="header-title">KAU Majors Assistant</div>
          <img src="/white-logo.png" alt="Faculty logo" />
        </div>

        {/* Chat Container */}
        <div className="chat-container">
          <div className="suggestions">
            {suggestions.map((s, idx) => (
              <button key={idx} onClick={() => setInput(s)}>{s}</button>
            ))}
          </div>

          <div className="chat-box">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender}`}>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>

          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask a question about KAU majors..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
