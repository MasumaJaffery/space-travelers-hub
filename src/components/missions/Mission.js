import React from 'react';

const Mission = ({ mission }) => {
  return (
    <li>
      {mission.mission_name} - {mission.reserved ? 'Reserved' : 'Not Reserved'}
    </li>
  );
};

export default Mission;
