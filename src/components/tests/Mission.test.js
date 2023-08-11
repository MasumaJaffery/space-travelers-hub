import React from 'react';
import { render } from '@testing-library/react';
import Mission from '../missions/Mission';

describe('displays mission', () => {
  it('displays mission with correct reserved status', () => {
    const mission = { mission_name: 'Mission 1', reserved: true };

    const { getByText } = render(<Mission mission={mission} />);

    const missionElement = getByText(/Mission 1 - Reserved/i);
    expect(missionElement).toBeInTheDocument();
  });
});
