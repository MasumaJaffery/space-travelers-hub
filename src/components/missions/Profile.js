import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <div>
      <h1>Profile</h1>
      <h2>My Missions</h2>
      <ul>
        {missions
          .filter((mission) => mission.reserved)
          .map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Profile;
