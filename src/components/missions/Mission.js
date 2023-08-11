import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Reducer
const initialState = {
  missions: [],
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MISSIONS':
      return {
        ...state,
        missions: action.payload,
      };
    default:
      return state;
  }
};

// Action
const setMissions = (missions) => ({
  type: 'SET_MISSIONS',
  payload: missions,
});

// Component
const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    const data = [
      { mission_id: 1, mission_name: 'Mission 1', reserved: true },
      { mission_id: 2, mission_name: 'Mission 2', reserved: false },
    ];
    dispatch(setMissions(data));
  }, [dispatch]);

  return (
    <div>
      <h1>Missions</h1>
      <ul>
        {missions.map((mission) => (
          <li key={mission.mission_id}>
            {mission.mission_name}
            {' '}
            -
            {mission.reserved ? 'Reserved' : 'Not Reserved'}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Redux store
const store = createStore(missionReducer);

// Wrapping the component with Redux Provider
const MissionWithRedux = () => (
  <Provider store={store}>
    <Mission />
  </Provider>
);

export default MissionWithRedux;
