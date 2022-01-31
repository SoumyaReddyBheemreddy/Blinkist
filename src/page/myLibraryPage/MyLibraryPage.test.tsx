import React from "react";
import { render, screen } from "@testing-library/react";
import MyLibraryPage from "./MyLibraryPage";
import { BrowserRouter } from "react-router-dom";
const MockMyLibraryPage = () => {
  return (
    <BrowserRouter>
      <MyLibraryPage />
    </BrowserRouter>
  );
};
test("render a enterpreneurship page", () => {
  render(<MockMyLibraryPage />);
  const page = screen.getByTestId("my library page");
  expect(page).toBeInTheDocument();
});
