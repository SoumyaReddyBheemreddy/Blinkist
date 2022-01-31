import { screen, render, fireEvent} from "@testing-library/react";
import ExploreBooks from "./ExploreBooks";
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
    role: "explore",
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
    category: "just added",
  },
];
const response = { data: data };
const MockExploreBooks = () => {
  return (
    <BrowserRouter>
      <ExploreBooks />
    </BrowserRouter>
  );
};
window.scrollTo = jest.fn();
describe("Explore Books",()=>{
    test("render trending book",async()=>{
        mockedAxios.get.mockResolvedValue(Promise.resolve(response));
        render(<MockExploreBooks />);
        const trendingBooks = await screen.findAllByTestId(/card-trending blinks/i);
        expect(trendingBooks.length).toBe(2);
    });
    test("render just added book",async()=>{
        mockedAxios.get.mockResolvedValue(Promise.resolve(response));
        render(<MockExploreBooks />);
        const trendingBooks = await screen.findAllByTestId(/card-just added/i);
        expect(trendingBooks.length).toBe(1);
    });
    test("render audio book",async()=>{
        mockedAxios.get.mockResolvedValue(Promise.resolve(response));
        render(<MockExploreBooks />);
        const trendingBooks = await screen.findAllByTestId(/card-featured audio blinks/i);
        expect(trendingBooks.length).toBe(1);
    });
    test("render on click on /book",async()=>{
        mockedAxios.get.mockResolvedValue(Promise.resolve(response));
        render(<MockExploreBooks />);
        const bookCard = await screen.findByTestId(/card-1/i);
        fireEvent.click(bookCard);
        expect(window.location.pathname).toBe("/book");
    })
});
