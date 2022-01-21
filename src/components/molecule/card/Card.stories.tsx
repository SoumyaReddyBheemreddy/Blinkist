import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from "./Card";
import CoverPhoto from '../../../assets/cover_image/2.png'
export default{
  title:"Molecules/Card",
  component:Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />
export const RestingCard = Template.bind({});
RestingCard.args = {
  title:"Beyond Entreprenurship",
  author:"Jim Collins & Bill Lazier",
  image:CoverPhoto,
  readingTime:"13 minute read",
  userCount:"19k reads",
  progress:55,
  role:"current"
}
export const ReadAgainCard = Template.bind({});
ReadAgainCard.args = {
    title:"Beyond Entreprenurship",
  author:"Jim Collins & Bill Lazier",
  image:CoverPhoto,
  readingTime:"13 minute read",
  userCount:"19k reads",
  role:"read again",
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
export const Finish = Template.bind({});
Finish.args = {
  title:"Beyond Entreprenurship",
  author:"Jim Collins & Bill Lazier",
  image:CoverPhoto,
  readingTime:"13 minute read",
  userCount:"19k reads",
  role:"currently reading",
  progress:45
}