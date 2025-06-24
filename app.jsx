import { useState } from 'react';
import SignUp from './components/SignUp';
import Authenticate from './components/Authenticate';
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  const [error, setError] = useState('');

  return (
    <div className="app">
      <h1>FSA Auth App</h1>
      <SignUp setToken={setToken} setError={setError} />
      <Authenticate token={token} error={error} />
    </div>
  );
}

export default App;
