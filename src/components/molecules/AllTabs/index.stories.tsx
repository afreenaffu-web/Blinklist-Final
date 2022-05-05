import { ComponentMeta, ComponentStory } from "@storybook/react";
import AllTabs from "./index";

export default {
  title: "atoms/AllTabs",
  component: AllTabs,
} as ComponentMeta<typeof AllTabs>;

const Template: ComponentStory<typeof AllTabs> = () => (
  <AllTabs searchTerm="" />
);

export const allTabs = Template.bind({});
