import React from "react";
import AvatarIcon from "./AvatarIcon";
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
    title: 'Atoms/Avatar',
    component: AvatarIcon
}as ComponentMeta<typeof AvatarIcon>

const Template: ComponentStory<typeof AvatarIcon> = args => <AvatarIcon {...args} />
export const Avatar = Template.bind({});
Avatar.args = {
    children:"B"
}