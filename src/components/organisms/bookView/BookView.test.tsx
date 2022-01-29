import { screen, render, fireEvent, act } from "@testing-library/react";
import BookView from "./BookView";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "@testing-library/jest-dom";
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
const data = 
  {
   
    id: 1,
    title: "Bring Your Human to Work",
    author: "Erica Keswin",
    image: "/assets/cover_image/1.png",
    readingTime: "13 minute read",
    userCount: "20k reads",
    progress: 55,
    role: "currently reading",
    category: "featured audio blinks"
  }

const response = { data: data };
const MockBookView = () => {
  return (
    <BrowserRouter>
      <BookView />
    </BrowserRouter>
  );
};
describe("Book view",()=>{
    test("should render data from axios",async ()=>{
        mockedAxios.get.mockResolvedValue(Promise.resolve(response));
        render(<MockBookView />);
        const bookDetailsDefaultTitle =await screen.findByText("Get the key ideas from");
         const bookTitle =await screen.findByText("Bring Your Human to Work");
         const bookQuote = await screen.findByText("Turning Your Business into an Enduring Great Company");
        const bookAuthor =await  screen.findByText("by Erica Keswin");
        const bookReadingTime =await screen.findByText("13 minute read");
        const readNowButton = await screen.findByRole("button",{name:"Read now"})
        const finishedButton =await screen.findByRole("button",{name:"Finished Reading"});
        expect(bookDetailsDefaultTitle).toBeInTheDocument();
        expect(bookTitle).toBeInTheDocument();
        expect(bookQuote).toBeInTheDocument();
        expect(bookAuthor).toBeInTheDocument();
        expect(bookReadingTime).toBeInTheDocument();
        expect(readNowButton).toBeInTheDocument();
        expect(finishedButton).toBeInTheDocument();
    })
    test("render tab",async()=>{
        mockedAxios.get.mockResolvedValue(Promise.resolve(response));
        render(<MockBookView />);
        const synopsis =await screen.findByRole("tab",{name:/Synopsis/i});
        const whoIsItFor =await screen.findByRole("tab",{name:/Who is it for?/i});
        const aboutTheAuthor =await screen.findByRole("tab",{name:/About the author/i});
        expect(synopsis).toHaveAttribute("aria-selected", "true");
        expect(whoIsItFor).toHaveAttribute("aria-selected", "false");
        expect(aboutTheAuthor).toHaveAttribute("aria-selected", "false");
        fireEvent.click(whoIsItFor);
        expect(synopsis).toHaveAttribute("aria-selected", "false");
        expect(whoIsItFor).toHaveAttribute("aria-selected", "true");
        expect(aboutTheAuthor).toHaveAttribute("aria-selected", "false");
        fireEvent.click(aboutTheAuthor);
        expect(synopsis).toHaveAttribute("aria-selected", "false");
        expect(whoIsItFor).toHaveAttribute("aria-selected", "false");
        expect(aboutTheAuthor).toHaveAttribute("aria-selected", "true"); 
    })
    test("render onclick finished button",async()=>{
        mockedAxios.get.mockResolvedValue(Promise.resolve(response));
        const promise = Promise.resolve();
        render(<MockBookView />);
        const finishedButton =await screen.findByRole("button",{name:"Finished Reading"});
        fireEvent.click(finishedButton);
        expect(window.location.pathname).toBe("/");
        await act(()=> promise);
    })
})