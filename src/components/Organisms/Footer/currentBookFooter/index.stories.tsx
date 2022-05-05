import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Footer } from "./index";

export default {
  title: "Organisms/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const BasicFooter = Template.bind({});
