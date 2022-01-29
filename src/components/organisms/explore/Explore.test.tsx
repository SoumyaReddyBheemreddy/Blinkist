import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Explore from "./Explore";
 
describe("Explore",()=>{
    test("render a expand less",()=>{
        render(<Explore />);
        const exploreElement = screen.getByTestId("explore");
        const expandMore = screen.getByTestId("ExpandMoreIcon");
        expect(exploreElement).toBeInTheDocument();
        expect(expandMore).toBeInTheDocument();
        
    });
    test("render a expand more",async ()=>{
        render(<Explore />);
        const exploreElement = await screen.findByTestId("isDownButton")
        fireEvent.click(exploreElement);
        const expandLess = screen.getByTestId("ExpandLessIcon");
        const hrElement = screen.getByTestId("isUp");
        expect(expandLess).toBeInTheDocument();
        expect(hrElement).toBeInTheDocument();
    })
    test("render a backdrop onclick",()=>{
        render(<Explore />);
        const backdropElement = screen.getByTestId("backdrop");
        fireEvent.click(backdropElement);
        const explore = screen.getByTestId("explore");
        expect(explore).toBeInTheDocument();
    })
})
