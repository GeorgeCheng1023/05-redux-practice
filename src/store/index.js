import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducer: {
    increment(state){
      state.counter += 1;
    },
    decrement(state){
      state.counter -= 1;
    },
    toggle(state){
      state.showCounter = !state.showCounter;
    }
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions;

export default store;
