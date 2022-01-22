import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavSection from "./NavSection";
export default{
    title:"Organisms/footer/nav section",
    component: NavSection
}as ComponentMeta<typeof NavSection>
const Template :ComponentStory<typeof NavSection> = () => <NavSection />

export const navSection = Template.bind({})
