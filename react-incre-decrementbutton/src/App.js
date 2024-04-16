import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    const decrement = () => {
      setCount(prevCount => prevCount - 1);
    };
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Hello <span style={{ color: 'green' }}>SatheeshKumar</span></h1>
        <h2>Counter: {count}</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={increment} style={{ backgroundColor: 'green', color: 'white' }}>Increment</button>
        <button onClick={decrement} style={{ backgroundColor: 'red', color: 'white' }}>Decrement</button>
      </div>
      </div>
    );
  }
export default App;
