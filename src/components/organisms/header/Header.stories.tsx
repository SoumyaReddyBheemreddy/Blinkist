import Header from "./Header";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default{
    title:"Organisms/Header",
    component:Header
}as ComponentMeta<typeof Header>

const Template:ComponentStory<typeof Header> = () => <Header  />

export const HeaderApp = Template.bind({})