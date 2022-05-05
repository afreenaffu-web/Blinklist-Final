import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Explore from "./index";

export default {
  title: "Organisms/Explore",
  component: Explore,
} as ComponentMeta<typeof Explore>;

const Template: ComponentStory<typeof Explore> = (args) => (
  <BrowserRouter>
    {" "}
    <Explore {...args} />{" "}
  </BrowserRouter>
);

export const explore = Template.bind({});
