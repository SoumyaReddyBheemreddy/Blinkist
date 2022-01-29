import React from "react";
import { render, screen } from "@testing-library/react";
import NavItem from "./NavItem";
 

test("render a nav items",()=>{
    const itemsList:string[] = ["next","what to do?","what not to do?"];
    render(<NavItem title="Editorial" items={itemsList}/>);
    const navItems = screen.getByRole("box");
    const items = screen.getAllByTestId("nav-item");
    expect(navItems).toBeInTheDocument();
    expect(items.length).toBe(3);
})