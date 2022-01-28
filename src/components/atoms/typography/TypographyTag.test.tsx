import React from 'react';
import { render, screen } from '@testing-library/react';
import TypographyTag from "./TypographyTag";

test('renders a typography tag', () => {
  render(<TypographyTag variant="h1" children='Text'/>);
  const avatarElement = screen.getByText(/Text/i);
  expect(avatarElement).toBeInTheDocument();
});
