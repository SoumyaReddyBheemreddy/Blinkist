import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListTabs from "./ListTabs";
export default {
  title: "Molecule/Tabs",
  component: ListTabs,
} as ComponentMeta<typeof ListTabs>;

const Template: ComponentStory<typeof ListTabs> = (args) => (
  <ListTabs {...args} />
);
export const TabBar = Template.bind({});
