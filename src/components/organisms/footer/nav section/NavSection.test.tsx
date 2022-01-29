import React from "react";
import { render, screen } from "@testing-library/react";
import NavSection from "./NavSection"
 

test("render a nav items",()=>{
    render(<NavSection />);
    const navItems = screen.getByTestId("box");
    expect(navItems).toBeInTheDocument();
})