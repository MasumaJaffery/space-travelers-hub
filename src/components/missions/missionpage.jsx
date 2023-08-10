import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMissions,
  joinMission,
  leaveMission,
} from '../../redux/misionSlice';
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

  const handleJoinMission = (missionId) => {
    dispatch(joinMission({ missionId }));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission({ missionId }));
  };

  return (
    <div>
      <table className="mission-table">
        <thead>
          <tr>
            <th>Mission Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr className="mission-container" key={mission.mission_id}>
              <td className="mission-title">{mission.mission_name}</td>
              <td className="mission-description">{mission.description}</td>
              <td className="mission-status">
                {mission.reserved ? (
                  <span className="active-member-badge">Active Member</span>
                ) : (
                  <span className="not-member-badge">Not a Member</span>
                )}
              </td>
              <td className="mission-actioin">
                {mission.reserved ? (
                  <button
                    type="button"
                    className="leave-button"
                    onClick={() => handleLeaveMission(mission.mission_id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="join-button"
                    onClick={() => handleJoinMission(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
