import { useState, useEffect } from 'react';
import getDollar from '../utils';
import './App.css';

function App() {
  const [dollar_val, setDollarVal] = useState([]);

  const URL = import.meta.env.VITE_URL;

  useEffect(() => {
    getDollar(URL + '/usd')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Hola mundo</h1>
      <h2>Hola</h2>
    </>
  );
}

export default App;
