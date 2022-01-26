import { ComponentStory,ComponentMeta } from '@storybook/react';
import SearchInput from './SearchInput';

export default {
    title:"Organisms/SearchInput",
    component:SearchInput
}as ComponentMeta<typeof SearchInput>
const Template:ComponentStory <typeof SearchInput> = ()=><SearchInput />
export const searchInput = Template.bind({})