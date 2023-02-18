import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector as _useSelector } from 'react-redux';
import CounterState from './counter';
import logger from 'redux-logger';

const loadState = (): RootState | undefined => {
  try {
    const json = localStorage.getItem("redux");
    if (!json) return undefined;
    else return JSON.parse(json);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: RootState) => {
  const json = JSON.stringify(state);
  localStorage.setItem("redux", json);
};

const reducer = combineReducers({
  counter: CounterState.reducer
});

export type RootState = ReturnType<typeof reducer>;

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    (process.env.NODE_ENV === `development`)
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
export const dispatch = store.dispatch;
