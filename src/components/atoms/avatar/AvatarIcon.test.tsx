import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarIcon from "../AvatarIcon";

test('renders a avatarw', () => {
  render(<AvatarIcon children='A'/>);
  const avatarElement = screen.getByText(/A/i);
  expect(avatarElement).toBeInTheDocument();
});
