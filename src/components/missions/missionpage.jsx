import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMissions } from '../../redux/misionSlice';
import '../Style/misionpage.css';

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

  return (
    <div>
      <table className="mission-table">
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr className="mission-container" key={mission.mission_id}>
              <td className="mission-title">{mission.mission_name}</td>
              <td className="mission-description">{mission.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
