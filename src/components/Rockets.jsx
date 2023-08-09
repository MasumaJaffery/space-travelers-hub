import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/RocketSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rockets]);

  return (
    <div className="card mb-3" style={{ maxWidth: '90vw' }}>
      <div className="rockets__container d-flex-column">
        {rockets.length === 0 ? (
          <h2>Loading info...</h2>
        ) : (
          <ul className="rocketslist">
            {rockets.map((rocket) => (
              <li key={rocket.id} className="rocketsitems">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={rocket.flickr_images[0]}
                      alt={rocket.name}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">{rocket.rocket_name}</h3>
                      <p className="card-text">{rocket.description}</p>
                      <p className="card-text">
                        <button type="button" className="btn btn-primary">Reservation</button>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Rockets;
