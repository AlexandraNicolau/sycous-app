import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getConsumers = (data) => {
  const consumers = [];
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  data.map(item => consumers.push(...item.consumers));
  return consumers;
}

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(
      'http://localhost:3000/locations',
    );

    if (result.status === 200) {
      const consumers = getConsumers(result.data)
      // console.log(consumers)
      setData(consumers);
    }
    else {
      console.log("Please start the mock server")
    }

  }, []);

  const consumersList = data.map((consumer) => {
    return <li className="consumer" key={consumer.consumerId}>
     <div> {consumer.name}</div>
      <div>{consumer.email}</div>
      <div>{consumer.phoneNumber}</div>
      <div>{consumer.occupationDate}</div>
    </li>
  });

  return (
    <div className="app">
      <header>Header</header>
      <main>
        <ul>
          <li className="consumer">
            <div>Name</div>
            <div>Email</div>
            <div>Phone Number</div>
            <div>Occupation Date</div>
          </li>
          {consumersList}
        </ul>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
