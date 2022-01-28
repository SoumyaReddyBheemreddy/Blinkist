import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from "../Logo";
test('renders a logo', () => {
  render(<Logo />);
  const logoElement = screen.getByTitle(/Logo/i);
  expect(logoElement).toBeInTheDocument();
});
