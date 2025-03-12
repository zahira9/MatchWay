import React, { useState } from 'react';

const Recommendations = () => {
  const [budget, setBudget] = useState('');
  const [preferences, setPreferences] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/api/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ budget, preferences })
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <h2>Get Recommendations</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Budget" value={budget} onChange={(e) => setBudget(e.target.value)} />
        <input type="text" placeholder="Preferences" value={preferences} onChange={(e) => setPreferences(e.target.value)} />
        <button type="submit">Get Recommendations</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};

export default Recommendations;