import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Rockets from '../Rockets';

test('renders loading message when rockets list is empty', () => {
  render(<Rockets />);
  const loadingMessage = screen.getByText(/Loading info.../i);
  expect(loadingMessage).toBeInTheDocument();
});

test('renders rockets when rockets list is not empty', () => {
  const mockRockets = [
    {
      id: 'rocket1',
      rocket_name: 'Falcon 1',
      description: 'Description 1',
      reserved: false,
      flickr_images: ['image1.jpg'],
    },
  ];

  render(<Rockets rockets={mockRockets} />);
  const rocketName = screen.getByText(/Falcon 1/i);
  expect(rocketName).toBeInTheDocument();
});

test('clicking reserve button toggles reservation status', () => {
  const mockRocket = {
    name: 'Falcon 1',
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    id: '5e9d0d95eda69955f709d1eb',
    reserved: false,
    flickr_images: [
      'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
      'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg',
      'https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg',
      'https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg',
      'https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg',
      'https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg',
    ],
  };

  render(<Rockets rockets={[mockRocket]} />);
  const reserveButton = screen.getByText(/Reserve Rocket/i);
  fireEvent.click(reserveButton);

  const cancelReservationButton = screen.getByText(/Cancel Reservation/i);
  expect(cancelReservationButton).toBeInTheDocument();
});
