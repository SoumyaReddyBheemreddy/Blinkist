import React from "react";
import { render, screen } from "@testing-library/react";
import BookCard from "./BookCard";
const coverPhoto = "/assets/cover_image/2.png";
describe("Book Card", () => {
  test("render a currently reading book", () => {
    render(
      <BookCard
        title="Beyond Entreprenurship"
        author="Jim Collins & Bill Lazier"
        image={coverPhoto}
        readingTime="13 minute read"
        userCount="19k reads"
        progress={55}
        role="currently reading"
      />
    );
    const currentCard = screen.getByTestId("current");
    expect(currentCard).toBeInTheDocument();
  });
  test("render a finished reading book", () => {
    render(
      <BookCard
        title="Beyond Entreprenurship"
        author="Jim Collins & Bill Lazier"
        image={coverPhoto}
        readingTime="13 minute read"
        userCount="19k reads"
        progress={100}
        role="finished"
      />
    );
    const finishedCard = screen.getByTestId("finished");
    expect(finishedCard).toBeInTheDocument();
  });
  test("render a explore book", () => {
    render(
      <BookCard
        title="Beyond Entreprenurship"
        author="Jim Collins & Bill Lazier"
        image={coverPhoto}
        readingTime="13 minute read"
        userCount="19k reads"
        role="explore"
      />
    );
    const exploreCard = screen.getByTestId("explore");

    expect(exploreCard).toBeInTheDocument();
  });
});
