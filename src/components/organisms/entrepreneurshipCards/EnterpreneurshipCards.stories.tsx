import { ComponentStory, ComponentMeta } from '@storybook/react';
import EnterpreneurshipCards from './EnterpreneurshipCards';
import {BrowserRouter} from 'react-router-dom'
export default{
    title:"Organisms/Enterprenurship Cards",
    components:EnterpreneurshipCards
}as ComponentMeta<typeof EnterpreneurshipCards>
const Template: ComponentStory<typeof EnterpreneurshipCards> = ()=><BrowserRouter><EnterpreneurshipCards /></BrowserRouter> 
export const cards = Template.bind({})