import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../missions/Profile';
import ReservedRocketsDisplay from '../Profiler';

const mockStore = configureStore([]);

describe('Profile component', () => {
  it('renders profile with reserved missions', () => {
    const initialState = {
      missions: [
        { mission_id: 1, mission_name: 'Mission 1', reserved: true },
        { mission_id: 2, mission_name: 'Mission 2', reserved: false },
        { mission_id: 3, mission_name: 'Mission 3', reserved: true },
      ],
    };
    const store = mockStore(initialState);

    const { getByText, queryByText } = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    expect(getByText('Profile')).toBeInTheDocument();
    expect(getByText('My Missions')).toBeInTheDocument();
    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 3')).toBeInTheDocument();
    expect(queryByText(/Mission 2/i)).not.toBeInTheDocument();
  });

test('displays reserved rockets or "No rockets reserved yet"', () => {
  const reservedRockets = [
    { id: 1, rocket_name: 'Falcon 9' },
    { id: 2, rocket_name: 'Atlas V' },
  ];

  // Render the component with the reservedRockets data
  const { getByText, queryByText } = render(
    <ReservedRocketsDisplay reservedRockets={reservedRockets} />
  );

  // Check if the "Reserved Rockets" heading is present
  const heading = getByText('Reserved Rockets');
  expect(heading).toBeInTheDocument();

  // Check if rocket names are displayed
  reservedRockets.forEach((rocket) => {
    const rocketName = getByText(rocket.rocket_name);
    expect(rocketName).toBeInTheDocument();
  });

  // Check if "No rockets reserved yet" message is not displayed
  const noRocketsMessage = queryByText('No rockets reserved yet');
  expect(noRocketsMessage).not.toBeInTheDocument();
});

test('displays "No rockets reserved yet" message', () => {
  const reservedRockets = []; // Empty array

  // Render the component with the empty reservedRockets array
  const { getByText } = render(
    <ReservedRocketsDisplay reservedRockets={reservedRockets} />
  );

  // Check if the "No rockets reserved yet" message is displayed
  const noRocketsMessage = getByText('No rockets reserved yet');
  expect(noRocketsMessage).toBeInTheDocument();
});

});
