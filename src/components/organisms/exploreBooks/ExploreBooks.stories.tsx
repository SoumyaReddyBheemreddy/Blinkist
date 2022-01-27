import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExploreBooks from "./ExploreBooks"
import {BrowserRouter} from 'react-router-dom'
export default{
    title:"Organisms/Enterprenurship Cards",
    components:ExploreBooks
}as ComponentMeta<typeof ExploreBooks>
const Template: ComponentStory<typeof ExploreBooks> = ()=><BrowserRouter><ExploreBooks /></BrowserRouter> 
export const cards = Template.bind({})