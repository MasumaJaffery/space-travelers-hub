import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Profile from '../Profile';

// Mock the useSelector function
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Profile component - Reserved Rockets', () => {
  beforeEach(() => {
    useSelector.mockClear();
  });

  test('renders "No rockets reserved yet" message when reserved rockets is empty', () => {
    useSelector.mockReturnValue([]);

    const { getByText } = render(<Profile />);

    const rocketsHeader = getByText('Reserved Rockets');
    expect(rocketsHeader).toBeInTheDocument();

    const noRocketsMessage = getByText('No rockets reserved yet');
    expect(noRocketsMessage).toBeInTheDocument();
  });
});
