import React from 'react';
import { render } from '@testing-library/react';
import Mission from '../missions/Mission';

test('displays mission with correct reserved status', () => {
  const mission = {
    mission_name: 'Mission 1',
    reserved: true,
  };

  const { getByText } = render(<Mission mission={mission} />);
  const missionNameElement = getByText(/Mission 1/i);
  const reservedStatusElement = getByText(/Reserved/i);

  expect(missionNameElement).toBeInTheDocument();
  expect(reservedStatusElement).toBeInTheDocument();
});
