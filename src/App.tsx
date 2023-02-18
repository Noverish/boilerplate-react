import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { dispatch, useSelector } from './state';
import CounterState from './state/counter';

function App() {
  const { value } = useSelector(s => s.counter);

  const increment = () => {
    dispatch(CounterState.update({ value: value + 1 }));
  }

  const decrement = () => {
    dispatch(CounterState.update({ value: value - 1 }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h3>{value}</h3>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </header>
    </div>
  );
}

export default App;
