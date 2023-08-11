import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders footer text with correct links', () => {
    const { getByText } = render(<Footer />);

    const githubLink1 = getByText('@MasumaJaffery');
    const githubLink2 = getByText('@NajibullahJafari');

    expect(githubLink1).toBeInTheDocument();
    expect(githubLink1.href).toBe('https://github.com/MasumaJaffery');

    expect(githubLink2).toBeInTheDocument();
    expect(githubLink2.href).toBe('https://github.com/najibullahjafari');

  });

  it('has the correct class name', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('.card-footer.text-body-secondary');
    expect(footer).toBeInTheDocument();
  });
});
