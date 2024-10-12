import React, { useState } from 'react';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [message, setMessage] = useState('');

  const callBackendAPI = async () => {
    try {
      console.log(apiUrl);
      const response = await fetch(`${apiUrl}/secret`);
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage('Error fetching data');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, Dockerized React App --NUMBER 1--!</h1>
        <button onClick={callBackendAPI}>Call Backend</button>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;