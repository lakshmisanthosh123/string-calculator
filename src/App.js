import React, { useState } from 'react';
import add from './add'; 

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const sum = add(input); 
      setResult(sum);
      setError(null); 
    } catch (e) {
      setError(e.message); 
      setResult(null); 
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
        style={{ padding: '10px', width: '300px' }}
      />
      <br /><br />
      <button onClick={handleCalculate} style={{ padding: '10px 20px' }}>
        Calculate
      </button>
      <br /><br />
      {result !== null && <h3>Result: {result}</h3>}
      {error && <h3 style={{ color: 'red' }}>{error}</h3>}
    </div>
  );
}

export default App;
