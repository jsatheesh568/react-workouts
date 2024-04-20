import React, { useState } from 'react'; // Import useState from React
import LoginForm from './components/LoginForm'; // Import LoginForm component
import GradeCalculator from './components/GradeCalculator'; // Import GradeCalculator component
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginForm handleLogin={handleLogin} />
      ) : (
        <GradeCalculator />
      )}
    </div>
  );
};

export default App;