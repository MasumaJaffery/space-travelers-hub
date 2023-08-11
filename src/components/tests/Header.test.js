import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header component', () => {
  it('renders the header with navigation links', () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const logoImage = getByAltText('logo');
    expect(logoImage).toBeInTheDocument();

    const appName = getByText("Space Travelers' Hub");
    expect(appName).toBeInTheDocument();

    const myProfileLink = getByText('My Profile');
    expect(myProfileLink).toBeInTheDocument();
    expect(myProfileLink.getAttribute('href')).toBe('/myprofile');

    const missionLink = getByText('Mission');
    expect(missionLink).toBeInTheDocument();
    expect(missionLink.getAttribute('href')).toBe('/misions');

    const rocketsLink = getByText('Rockets');
    expect(rocketsLink).toBeInTheDocument();
    expect(rocketsLink.getAttribute('href')).toBe('/rockets');
  });
});
