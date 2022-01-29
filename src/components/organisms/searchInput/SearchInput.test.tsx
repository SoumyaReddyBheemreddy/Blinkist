import React from "react";
import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput"

test("render a header",()=>{
    render(<SearchInput />);
    const searchElement = screen.getByTestId("search");

    expect(searchElement).toBeInTheDocument();
})