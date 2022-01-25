import { ComponentStory, ComponentMeta } from '@storybook/react';
import Banner from './Banner';
export default{
    title:"Molecule/Banner",
    component:Banner
}as ComponentMeta<typeof Banner>
const Template:ComponentStory<typeof Banner> = ()=><Banner />
export const banner = Template.bind({})