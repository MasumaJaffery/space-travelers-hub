import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const misionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissions: (state, action) => action.payload,
    joinMission: (state, action) => {
      const { missionId } = action.payload;
      return state.map((mission) => {
        if (mission.mission_id === missionId) {
          console.log(action.payload);
          return { ...mission, reserved: true };
        }
        return mission;
      });
    },
  },
});

export const { setMissions, joinMission } = misionSlice.actions;

export default misionSlice.reducer;
