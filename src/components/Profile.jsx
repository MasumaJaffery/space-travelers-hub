import React from 'react';
import { useSelector } from 'react-redux';
import { selectJoinedMissions } from '../redux/misionSlice';

const Profile = () => {
  const joinedMissions = useSelector(selectJoinedMissions);

  return (
    <div className="Profile-container">
      <h2 className="mission-jion-header">Joined Missions</h2>
      <ul>
        {joinedMissions.map((mission) => (
          <li className="joined-missions" key={mission.mission_id}>{mission.mission_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
