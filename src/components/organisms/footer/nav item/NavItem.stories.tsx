import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavItem from "./NavItem";
export default{
    title:"Organisms/footer/nav item",
    component: NavItem
}as ComponentMeta<typeof NavItem>
const Template :ComponentStory<typeof NavItem> = args => <NavItem {...args} />

export const navItem = Template.bind({})
const itemsList:string[] = ["next","what to do?","what not to do?"]
navItem.args = {
    title:"Editorial",
    items:itemsList,

}