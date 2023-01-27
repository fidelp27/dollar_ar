import React, { useState, useEffect } from 'react';
import getDollar from '../utils';
import './App.css';

function App() {
  const [dollar_val, setDollarVal] = useState([]);
  const [today, setToday] = useState('');
  const URL = import.meta.env.VITE_URL;

  useEffect(() => {
    let fecha = new Date();
    let anio = fecha.getFullYear();
    let month =
      fecha.getMonth() < 10
        ? '0' + (fecha.getMonth() + 1)
        : fecha.getMonth() + 1;
    let day = fecha.getDate() < 10 ? '0' + fecha.getDate() : fecha.getDate();
    console.log('day', day);
    let hoy = `${anio}-${month}-${day}`;
    setToday(hoy);
  }, []);

  useEffect(() => {
    getDollar(URL + '/usd')
      .then((res) => setDollarVal(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Hola mundo</h1>
      {React.Children.toArray(
        dollar_val.map((val) => {
          return (
            <>
              {val.d == '2023-01-26' ? (
                <>
                  <div>
                    <p>{val.d}</p>
                    <p>{val.v}</p>
                  </div>
                </>
              ) : null}
            </>
          );
        })
      )}
    </>
  );
}

export default App;
