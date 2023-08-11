import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store';
import Profile from './Profile';

const store = configureStore();

test('renders Profile component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );

  const profileHeader = getByText(/Profile/i);
  expect(profileHeader).toBeInTheDocument();
});

test('displays reserved missions in profile', () => {
  const { getByText, queryByText } = render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );

  const mission1 = getByText(/Mission 1/i);
  const mission2 = queryByText(/Mission 2/i);

  expect(mission1).toBeInTheDocument();
  expect(mission2).not.toBeInTheDocument();
});
