import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProgressBar from "./index";

export default {
  title: "atoms/ProgressBar",
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = () => <ProgressBar />;

export const Progress = Template.bind({});
