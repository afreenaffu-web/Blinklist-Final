import { ComponentMeta, ComponentStory } from "@storybook/react";
import Mylibrary from "./index";

export default {
  title: "atoms/MyLibrary",
  component: Mylibrary,
} as ComponentMeta<typeof Mylibrary>;

const Template: ComponentStory<typeof Mylibrary> = () => <Mylibrary />;

export const MyLibrary = Template.bind({});
