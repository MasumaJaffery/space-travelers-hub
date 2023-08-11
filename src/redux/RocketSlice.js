import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// API
export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  return response.data;
});

// Initial State
const initialState = {
  rockets: [],
  status: '',
  error: null,
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    // Reserve a rocket and set reserved to true
    reserveRocket(state, action) {
      const rocketId = action.payload;
      const existingRocket = state.rockets.find(
        (rocket) => rocket.id === rocketId,
      );
      if (existingRocket) {
        existingRocket.reserved = true;
      }
    },
    // Cancel reservation of a rocket and set reserved to false
    cancelReservation(state, action) {
      const rocketId = action.payload;
      const existingRocket = state.rockets.find(
        (rocket) => rocket.id === rocketId,
      );
      if (existingRocket) {
        existingRocket.reserved = false;
      }
    },
  },
  extraReducers(builder) {
    // API response
    builder
      .addCase(getRockets.pending, (state) => (
        { ...state, status: 'loading' }
      ))
      .addCase(getRockets.fulfilled, (state, action) => (
        { ...state, status: 'success', rockets: action.payload }
      ))
      .addCase(getRockets.rejected, (state, action) => (
        { ...state, status: 'error', error: action.error.message }
      ));
  },
});

export const { reserveRocket, cancelReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
