import React, { useState } from 'react';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div>
      <h2>Chatbot</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Ask me anything" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
};

export default Chatbot;