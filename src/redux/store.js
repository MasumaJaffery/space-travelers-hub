import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './RocketSlice';
import missionsReducer from './misionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    missions: missionsReducer,
  },
});

export default store;
