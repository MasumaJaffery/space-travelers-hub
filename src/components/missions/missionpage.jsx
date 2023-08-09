import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMissions } from '../../redux/misionSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  const fetchMissions = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const data = await response.json();
      dispatch(setMissions(data));
    } catch (error) {
      console.error('Error fetching missions:', error);
    }
  };

  useEffect(() => {
    fetchMissions();
  }, []);

  const missionItems = missions.map((mission) => (
    <div key={mission.mission_id}>
      <h3>{mission.mission_name}</h3>
      <p>{mission.description}</p>
    </div>
  ));

  return (
    <div>
      <h2>Missions</h2>
      {missionItems}
    </div>
  );
};

export default Missions;
