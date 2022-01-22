import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BookCard from "./BookCard";
const CoverPhoto = "/assets/cover_image/2.png";
export default{
  title:"Molecules/BookCard",
  component:BookCard
} as ComponentMeta<typeof BookCard>

const Template: ComponentStory<typeof BookCard> = args => <BookCard {...args} />
export const RestingCard = Template.bind({});
RestingCard.args = {
  title:"Beyond Entreprenurship",
  author:"Jim Collins & Bill Lazier",
  image:"/assets/cover_image/2.png",
  readingTime:"13 minute read",
  userCount:"19k reads",
  progress:55,
  role:"currently reading"
}
export const ReadAgainCard = Template.bind({});
ReadAgainCard.args = {
    title:"Beyond Entreprenurship",
  author:"Jim Collins & Bill Lazier",
  image:CoverPhoto,
  readingTime:"13 minute read",
  userCount:"19k reads",
  role:"finished",
  progress:100
}
export const Explore = Template.bind({});
Explore.args = {
  title:"Beyond Entreprenurship",
  author:"Jim Collins & Bill Lazier",
  image:CoverPhoto,
  readingTime:"13 minute read",
  userCount:"19k reads",
  role:"explore",
}
