import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, cancelReservation, reserveRocket } from '../redux/RocketSlice';
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
    <div>
      <h1>Rockets</h1>
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
                        <p className="card-text">
                          {rocket.description}
                        </p>
                        <div>
                          <button
                            type="button"
                            className={rocket.reserved ? 'rockets__cancel-btn' : 'rockets__reserve-btn btn btn-primary'}
                            onClick={() => {
                              dispatch(rocket.reserved
                                ? cancelReservation(rocket.id)
                                : reserveRocket(rocket.id));
                            }}
                          >
                            {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rockets;
