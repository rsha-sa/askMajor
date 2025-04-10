import './newPrompt.css/'
const NewPrompt = ({ input, setInput, handleSend }) => {

  return (
    <>    
    <form className='newForm' 
      onSubmit={(e) => {
        e.preventDefault(); 
        handleSend();
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
      />

      <button type='button' onClick={handleSend}>
        <box-icon name='send' class='send-icon' color='#263035'></box-icon>
      </button>
    </form>
    </>
  )
}

export default NewPrompt

