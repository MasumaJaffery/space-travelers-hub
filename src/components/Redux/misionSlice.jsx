import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    setMissions: (state, action) => action.payload,
  },
});

export const { setMissions } = missionsSlice.actions;
export default missionsSlice.reducer;
