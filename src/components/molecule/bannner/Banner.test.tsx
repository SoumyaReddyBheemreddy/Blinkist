import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from "./Banner"
describe("Banner",()=>{
    test('renders a banner title', () => {
        render(<Banner />);
        const titleElement = screen.getByText(/Explore Books on entrepreneurship/i);
        expect(titleElement).toBeInTheDocument();
      });
      test('renders a banner sub text', () => {
        render(<Banner />);
        const titleElement = screen.getByText(/Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start./i);
        expect(titleElement).toBeInTheDocument();
      });
      test('renders a banner image', () => {
        render(<Banner />);
        const titleElement = screen.getByAltText(/banner/i);
        expect(titleElement).toBeInTheDocument();
      });
})
