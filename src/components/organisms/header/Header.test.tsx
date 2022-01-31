import React from "react";
import { render, screen,fireEvent } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
const MockHeader = ()=>{
    return(
        <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
}
describe("Header",()=>{
    test("render a header",()=>{
        render(<MockHeader />);
        const headerElement = screen.getByTestId("header");
    
        expect(headerElement).toBeInTheDocument();
    });
    test("Mylibrary on click naviagate to homepage", () => {
        render(<MockHeader />)
        const mylibraryLink = screen.getByRole("link", { name: /My Library/i });
        fireEvent.click(mylibraryLink);
        expect(window.location.pathname).toBe("/");
      });
})
