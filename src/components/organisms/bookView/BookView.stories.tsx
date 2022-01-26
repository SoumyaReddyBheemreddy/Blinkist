import { ComponentStory,ComponentMeta } from '@storybook/react';
import {BrowserRouter} from 'react-router-dom'
import BookView from './BookView';
export default{
    title:"Organisms/BookView",
    component:BookView
}as ComponentMeta<typeof BookView>
const Template:ComponentStory<typeof BookView> = ()=><BrowserRouter><BookView /></BrowserRouter>
export const bookView = Template.bind({})