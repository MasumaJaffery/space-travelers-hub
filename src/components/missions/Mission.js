import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ mission }) => (
  <li>
    {mission.mission_name}
    {' '}
    -
    {' '}
    {mission.reserved ? 'Reserved' : 'Not Reserved'}
  </li>
);

Mission.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
