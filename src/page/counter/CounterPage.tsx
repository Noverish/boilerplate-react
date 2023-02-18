import logo from 'src/logo.svg';
import { dispatch, useSelector } from 'src/state';
import CounterState from 'src/state/counter';

import './CounterPage.scss';

export default function CounterPage() {
  const { value } = useSelector(s => s.counter);

  const increment = () => {
    dispatch(CounterState.update({ value: value + 1 }));
  }

  const decrement = () => {
    dispatch(CounterState.update({ value: value - 1 }));
  }

  return (
    <div className="CounterPage">
      <div className="content">
        <h3>{value}</h3>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
    </div>
  );
}
