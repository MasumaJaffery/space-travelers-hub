import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/RocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rockets]);

  return (
    <div className="Rocket-container">
      <h1>Rockets</h1>
      <section className="rockets d-flex-column">
        <div className="rockets__container d-flex-column">
          {rockets.length === 0 ? (
            <h2>Loading info...</h2>
          ) : (
            <ul className="rocketslist">
              {rockets.map((rocket) => (
                <li key={rocket.id} className="rocketsitems">
                  <img src={rocket.flickr_images[0]} alt={rocket.name} />
                  <div>
                    <h3>{rocket.name}</h3>
                    <h4>{rocket.type}</h4>
                    <p>
                      {rocket.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default Rockets;
