import React from "react";
import { render, screen } from "@testing-library/react";
import BookViewPage from "./BookViewPage";
import { BrowserRouter } from "react-router-dom";
const MockBookViewPage = () => {
  return (
    <BrowserRouter>
      <BookViewPage />
    </BrowserRouter>
  );
};
test("render a book view page", () => {
  render(<MockBookViewPage />);
  const page = screen.getByTestId("book view page");
  const headerElement = screen.getByTestId("header");
  const footerElement = screen.getByTestId("footer");
  expect(page).toBeInTheDocument();
  expect(headerElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
