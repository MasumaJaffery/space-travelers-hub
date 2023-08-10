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
          return { ...mission, reserved: true };
        }
        return mission;
      });
    },
    leaveMission: (state, action) => {
      const { missionId } = action.payload;
      return state.map((mission) => {
        if (mission.mission_id === missionId) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    },
  },
});

export const selectJoinedMissions = (state) => state.missions.filter((mission) => mission.reserved);

export const { setMissions, joinMission, leaveMission } = misionSlice.actions;

export default misionSlice.reducer;
