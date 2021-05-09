import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(
      'http://localhost:3000/locations',
    );
    console.log(result.data)
    setData(result.data);
  }, []);

  return (
    <div className="app">
      <header>Header</header>
      <main>Main</main>
      <footer>Footer</footer>    
    </div>
  );
}

export default App;
