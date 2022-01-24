import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Explore from "./Explore";
export default{
    title:"Organisms/Explore",
    component:Explore
}as ComponentMeta<typeof Explore>

const Template: ComponentStory<typeof Explore> = ()=><Explore />
export const explore = Template.bind({})