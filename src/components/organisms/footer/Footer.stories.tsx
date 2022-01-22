import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from "./Footer";
export default{
    title:"Organisms/footer/footer",
    component:Footer
}as ComponentMeta<typeof Footer>

const Template:ComponentStory<typeof Footer> = () => <Footer />

export const footer = Template.bind({})