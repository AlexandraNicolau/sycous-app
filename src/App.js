import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getConsumers = (data) => {
  const consumers = data.map(item => item.consumers);
  console.log(consumers)
}

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(
      'http://localhost:3000/locations',
    );
    if (result.status === 200) {
      getConsumers(result.data)
    }
    else {
      console.log("Please start the mock server")
    }

    // console.log(result.data)
    // setData(result.data);
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
