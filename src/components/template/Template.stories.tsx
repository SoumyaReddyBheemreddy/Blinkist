import { ComponentStory, ComponentMeta } from '@storybook/react';
import Template from './Template';
import {BrowserRouter} from 'react-router-dom'
import MyLibrary from "../organisms/MyLibrary/MyLibrary";
export default{
    title:"Template",
    compontent:Template
}as ComponentMeta<typeof Template>
const template:ComponentStory<typeof Template> = (args)=> <BrowserRouter><Template {...args}/></BrowserRouter>
export const page = template.bind({})
page.args ={
    children : <MyLibrary />
}