import React from 'react';
import { render } from '@testing-library/react';
import Mission from '../missions/Mission';

test('renders mission component', () => {
  const { getByText } = render(<Mission />);
  const headerElement = getByText(/Missions/i);
  expect(headerElement).toBeInTheDocument();
});

test('displays mission list', () => {
  const { getByText } = render(<Mission />);
  const missionElement = getByText(/Mission 1 - Reserved/i);
  expect(missionElement).toBeInTheDocument();
});
