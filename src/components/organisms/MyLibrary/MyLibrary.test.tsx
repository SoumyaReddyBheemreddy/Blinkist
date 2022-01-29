import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import MyLibrary from "./MyLibrary";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "@testing-library/jest-dom";
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
const data = [
  {
    id: 1,
    title: "Bring Your Human to Work",
    author: "Erica Keswin",
    image: "/assets/cover_image/1.png",
    readingTime: "13 minute read",
    userCount: "20k reads",
    progress: 55,
    role: "currently reading",
    category: "featured audio blinks",
  },
  {
    title: "Beyond Entreprenurship",
    author: "Jim Collins & Bill Lazier",
    image: "/assets/cover_image/2.png",
    readingTime: "13-minute read",
    userCount: "19k reads",
    progress: 100,
    role: "finished",
    category: "trending blinks",
    id: 2,
  },
  {
    id: 3,
    title: "Employee to Entrepreneur",
    author: "Steve Glaveski",
    image: "/assets/cover_image/11.png",
    readingTime: "15-minute read",
    userCount: "25k reads",
    progress: 100,
    role: "finished",
    category: "trending blinks",
  },
  {
    id: 4,
    title: "Doesn’t Hurt to Ask",
    author: "Trey Gowdy",
    image: "/assets/cover_image/3.png",
    readingTime: "13-minute read",
    userCount: "1.9k reads",
    progress: 45,
    role: "currently reading",
    category: "featured audio blinks",
  },
];
const response = { data: data };
const MockMyLibrary = () => {
  return (
    <BrowserRouter>
      <MyLibrary />
    </BrowserRouter>
  );
};
window.scrollTo = jest.fn();
describe("My Library", () => {
  test("render currently reading tab", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    render(<MockMyLibrary />);
    const currentlyReading = await screen.findByRole("tab", {
      name: /Currently reading/i,
    });
    const finishedReading = await screen.findByRole("tab", {
      name: /Finished/i,
    });
    expect(currentlyReading).toHaveAttribute("aria-selected", "true");
    expect(finishedReading).toHaveAttribute("aria-selected", "false");
    fireEvent.click(finishedReading);
    await waitFor(() => {
      expect(currentlyReading).toHaveAttribute("aria-selected", "false");
    });
    await waitFor(() => {
      expect(finishedReading).toHaveAttribute("aria-selected", "true");
    });
  });
  test("render currently reading books", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    render(<MockMyLibrary />);
    const currentlyReadingBooks = await screen.findAllByTestId(
      /card-currently reading/i
    );
    await waitFor(() => {
      expect(currentlyReadingBooks.length).toBe(2);
    });
  });
  test("render on click should redirect to /book", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    render(<MockMyLibrary />);
    const bookCard = await screen.findByTestId(/card-1/i);
    fireEvent.click(bookCard);
    
    expect(window.location.pathname).toBe("/book");
    
  });
  test("render finished reading books", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    render(<MockMyLibrary />);
    const finishedReading = await screen.findByRole("tab", {
        name: /Finished/i,
      });
      fireEvent.click(finishedReading);
    const finishedBooks = await screen.findAllByTestId(
      /card-finished/i
    );
    await waitFor(() => {
      expect(finishedBooks.length).toBe(2);
    });
  });
  
});
