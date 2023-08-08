import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './RocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
  },
});

export default store;
