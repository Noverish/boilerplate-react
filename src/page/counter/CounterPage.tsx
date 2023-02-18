import { t } from 'i18next';
import { Button } from 'react-bootstrap';
import { dispatch, useSelector } from 'src/state';
import CounterState from 'src/state/counter';

import './CounterPage.scss';

export default function CounterPage() {
  const { value } = useSelector(s => s.counter);

  const changeValue = (diff: number) => () => {
    dispatch(CounterState.update({ value: value + diff }));
  }

  const clear = () => {
    dispatch(CounterState.update({ value: 0 }));
  }

  return (
    <div className="CounterPage">
      <div className="content">
        <div className="display-1">{value}</div>
        <div className="button_group gap-1">
          <div className="d-flex gap-1">
            <Button onClick={changeValue(1)}>+1</Button>
            <Button onClick={changeValue(-1)}>-1</Button>
          </div>
          <div className="d-flex gap-1">
            <Button onClick={changeValue(10)}>+10</Button>
            <Button onClick={changeValue(-10)}>-10</Button>
          </div>
          <div>
            <Button onClick={clear}>{t('clear')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
