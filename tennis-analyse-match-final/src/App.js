import React, { useState } from 'react';

function App() {
  const [stats, setStats] = useState({
    firstServe: 0,
    secondServe: 0,
    faults: 0,
    winners: 0
  });

  const increment = (key) => {
    setStats((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial', backgroundColor: '#f5faff' }}>
      <h1 style={{ color: '#1e90ff' }}>🎾 Tennis Match Stats</h1>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => increment('firstServe')}>+1 First Serve</button>
        <button onClick={() => increment('secondServe')}>+1 Second Serve</button>
        <button onClick={() => increment('faults')}>+1 Fault</button>
        <button onClick={() => increment('winners')}>+1 Winner</button>
      </div>
      <div>
        <p>First Serves: {stats.firstServe}</p>
        <p>Second Serves: {stats.secondServe}</p>
        <p>Faults: {stats.faults}</p>
        <p>Winners: {stats.winners}</p>
      </div>
    </div>
  );
}

export default App;