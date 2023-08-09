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
  reducers: {},
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

export default rocketSlice.reducer;
