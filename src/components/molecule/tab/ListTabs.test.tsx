import React from "react";
import {  fireEvent, render, screen } from "@testing-library/react";
import ListTabs from "./ListTabs";

test("render a tab", () => {
  render(<ListTabs stateHandler={(value)=>{
      console.log("changing state of parent tab state");
  }}/>);
  const currentlyReading = screen.getByRole("tab",{name:/Currently reading/i});
  const finishedReading = screen.getByRole("tab",{name:/Finished/i})
  expect(currentlyReading).toHaveAttribute("aria-selected", "true");
  expect(finishedReading).toHaveAttribute("aria-selected", "false");
  fireEvent.click(finishedReading);
  expect(currentlyReading).toHaveAttribute("aria-selected", "false");
  expect(finishedReading).toHaveAttribute("aria-selected", "true");

});
