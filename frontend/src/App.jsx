import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [apiStatus, setApiStatus] = useState('Checking API status...');

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await axios.get('http://localhost:5000/');
        setApiStatus(response.data);
      } catch (error) {
        setApiStatus('Error: Could not connect to the backend API.');
        console.error(error);
      }
    };

    checkApiStatus();
  }, []);

  return (
    <div className="app-container">
      <h1>LoweZera HUB</h1>
      <p>Backend Status:</p>
      <p className="status-message">{apiStatus}</p>
    </div>
  );
}

export default App;