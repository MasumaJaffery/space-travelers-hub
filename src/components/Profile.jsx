import React from 'react';
import { useSelector } from 'react-redux';
import { selectJoinedMissions } from '../redux/misionSlice';
import './Style/profile.css';

const Profile = () => {
  const joinedMissions = useSelector(selectJoinedMissions);
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="Profile-container">
      <div className="Rockets-display">
        <h2 className="mission-jion-header">Joined Missions</h2>
        <hr />
        {joinedMissions.length > 0 ? (
          <table>
            <tbody>
              {joinedMissions.map((mission) => (
                <h6 key={mission.mission_id}>
                  {mission.mission_name}
                </h6>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No missions reserved yet</p>
        )}
      </div>
      <div className="Rockets-display">
        <h2>Reserved Rockets</h2>
        <hr />
        {reservedRockets.length > 0 ? (
          <table>
            <tbody>
              {reservedRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>
                    <h6>{rocket.rocket_name}</h6>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No rockets reserved yet</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
