import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../missions/Profile';

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
      </Provider>
    );

    expect(getByText('Profile')).toBeInTheDocument();
    expect(getByText('My Missions')).toBeInTheDocument();
    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 3')).toBeInTheDocument();
    expect(queryByText(/Mission 2/i)).not.toBeInTheDocument();
  });
});
