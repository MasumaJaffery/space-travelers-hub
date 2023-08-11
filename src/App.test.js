import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders header', () => {
  render(<App />, { wrapper: MemoryRouter });
  const headerElement = screen.getByText(/Space Travelers Hub/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders routes correctly', () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText('Rockets')).toBeInTheDocument();
  expect(screen.getByText('My Profile')).toBeInTheDocument();
  expect(screen.getByText('Missions')).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />, { wrapper: MemoryRouter });
  const footerElement = screen.getByText(/© 2023 Space Travelers Hub/i);
  expect(footerElement).toBeInTheDocument();
});
