import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./index";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <BrowserRouter>
    {" "}
    <Header />{" "}
  </BrowserRouter>
);

export const header = Template.bind({});
