import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  value: number;
}

const initialState: State = {
  value: 0,
}

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    update: (state: State, { payload }: PayloadAction<Partial<State>>) => ({
      ...state,
      ...payload,
    }),
  }
})

const CounterState = {
  update: slice.actions.update,
  reducer: slice.reducer,
};

export default CounterState;
