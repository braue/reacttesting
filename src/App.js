import React, { useEffect, useState } from 'react';
import './css/App.css';
import Counter from './components/Counter';
import ItemList from './components/ItemList'
import axios from 'axios';

function App() {
  const [message, setMessage] = useState("");
  
  useEffect(() => {

    // Make a GET request to the Flask backend
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
    }, [])

  return (
    <div className="App">
      <h1>{message}</h1>
      <h1>Counter App</h1>
      <Counter />
      <h1>ItemList</h1>
      <ItemList />
    </div>
  );
}

export default App;
