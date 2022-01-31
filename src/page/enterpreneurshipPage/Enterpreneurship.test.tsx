import React from "react";
import { render, screen } from "@testing-library/react";
import EnterpreneurshipPage from "./EnterpreneurshipPage";
import { BrowserRouter } from "react-router-dom";
const MockEnterpreneurshipPage = () => {
  return (
    <BrowserRouter>
      <EnterpreneurshipPage />
    </BrowserRouter>
  );
};
test("render a enterpreneurship page", () => {
  render(<MockEnterpreneurshipPage />);
  const page = screen.getByTestId("enterpreneurship page");
  expect(page).toBeInTheDocument();
});
