import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// API
export const getrockets = createAsyncThunk('rockets/getrockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  return response.data;
});
// Initial State
const initialState = {
  rockets: [],
  isLoading: false,
  error: null,
};

const rocketSlice = createSlice({
  initialState,
  reducers: {

  },
});
export default rocketSlice.reducer;
