import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
 

test("render a nav items",()=>{
    render(<Footer />);
    const navItems = screen.getByTestId("footer");

    expect(navItems).toBeInTheDocument();
})