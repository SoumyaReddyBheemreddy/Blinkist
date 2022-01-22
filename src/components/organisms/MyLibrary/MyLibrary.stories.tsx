import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyLibrary from './MyLibrary';
import {BrowserRouter} from 'react-router-dom'
export default{
    title: "Organisms/books",
    component:MyLibrary
}as ComponentMeta<typeof MyLibrary>
const Template: ComponentStory<typeof MyLibrary>  = () => <BrowserRouter><MyLibrary /> </BrowserRouter>
export const bookList = Template.bind({})