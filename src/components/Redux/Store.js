import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './misionSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
