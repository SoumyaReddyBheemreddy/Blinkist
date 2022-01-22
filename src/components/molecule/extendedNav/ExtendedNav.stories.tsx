import ExtendedNavLink from "./ExtendedNavLink";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AiOutlineRocket } from "react-icons/ai";
export default{
    title:"Molecule/Nav Link",
    component:ExtendedNavLink
}as ComponentMeta<typeof ExtendedNavLink>

const Template:ComponentStory <typeof ExtendedNavLink> = args => <ExtendedNavLink {...args}/>
export const ExtendedNav = Template.bind({});
ExtendedNav.args = {
    children:"Entrepreneurship",
    icon:AiOutlineRocket
}