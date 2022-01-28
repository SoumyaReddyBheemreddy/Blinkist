import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomButton from "./CustomButton";
test('renders a avatarw', () => {
  render(<CustomButton variant='contained'/>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});
