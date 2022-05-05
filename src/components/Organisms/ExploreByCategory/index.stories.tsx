import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import ExploreCategories from "./index";

export default {
  title: "Organisms/Explore Categories",
  component: ExploreCategories,
} as ComponentMeta<typeof ExploreCategories>;

const Template: ComponentStory<typeof ExploreCategories> = (args) => (
  <BrowserRouter>
    {" "}
    <ExploreCategories {...args} />{" "}
  </BrowserRouter>
);

export const ExploreByCategories = Template.bind({});
