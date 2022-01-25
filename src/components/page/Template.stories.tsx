import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyLibraryPage from './MyLibraryPage';
import {BrowserRouter} from 'react-router-dom'
import MyLibrary from "../organisms/MyLibrary/MyLibrary";
export default{
    title:"Pages/MyLibraryPage",
    compontent:MyLibraryPage
}as ComponentMeta<typeof MyLibraryPage>
const template:ComponentStory<typeof MyLibraryPage> = (args)=> <BrowserRouter><MyLibraryPage {...args}/></BrowserRouter>
export const page = template.bind({})
page.args ={
    children : <MyLibrary />
}