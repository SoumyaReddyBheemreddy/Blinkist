import { ComponentStory, ComponentMeta } from '@storybook/react';
import BookViewPageTab from "./BookViewPageTab";
export default{
    title:"Molecule/BookViewPageTab",
    component:BookViewPageTab
}as ComponentMeta<typeof BookViewPageTab>
const Template: ComponentStory<typeof BookViewPageTab> = (args) => <BookViewPageTab {...args} />
export const bookTag = Template.bind({})
bookTag.args = {
    synopsis:"Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    whoIsitFor:"Turning Your Business into an Enduring Great Company",
    aboutAuthor:"By Jim Collins and Bill Lazier"
}