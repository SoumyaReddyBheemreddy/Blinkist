import React from "react";
import {  fireEvent, render, screen } from "@testing-library/react";
import BookViewPageTab from "./BookViewPageTab";
test("render a tab", () => {
  render(<BookViewPageTab  
    synopsis="Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world."
    whoIsitFor="Turning Your Business into an Enduring Great Company"
    aboutAuthor="By Jim Collins and Bill Lazier"
  />);
  const synopsis = screen.getByRole("tab",{name:/Synopsis/i});
  const whoIsItFor = screen.getByRole("tab",{name:/Who is it for?/i});
  const aboutTheAuthor = screen.getByRole("tab",{name:/About the author/i});
  expect(synopsis).toHaveAttribute("aria-selected", "true");
  expect(whoIsItFor).toHaveAttribute("aria-selected", "false");
  expect(aboutTheAuthor).toHaveAttribute("aria-selected", "false");
  fireEvent.click(whoIsItFor);
  expect(synopsis).toHaveAttribute("aria-selected", "false");
  expect(whoIsItFor).toHaveAttribute("aria-selected", "true");
  expect(aboutTheAuthor).toHaveAttribute("aria-selected", "false");
  fireEvent.click(aboutTheAuthor);
  expect(synopsis).toHaveAttribute("aria-selected", "false");
  expect(whoIsItFor).toHaveAttribute("aria-selected", "false");
  expect(aboutTheAuthor).toHaveAttribute("aria-selected", "true");
  

});
