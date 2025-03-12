import React, { useState } from 'react';

const Itinerary = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/api/optimize-route', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ start, end })
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <h2>Optimize Your Route</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Start" value={start} onChange={(e) => setStart(e.target.value)} />
        <input type="text" placeholder="End" value={end} onChange={(e) => setEnd(e.target.value)} />
        <button type="submit">Get Route</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};

export default Itinerary;