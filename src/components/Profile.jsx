import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="Rockets-display">
      <h2>Rockets</h2>
      <hr />
      {reservedRockets.length > 0 ? (
        <table>
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td><h6>{rocket.rocket_name}</h6></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No rockets reserved yet</p>
      )}
    </div>
  );
};

export default Profile;
