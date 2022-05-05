import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookCard from "./index";

export default {
  title: "Molecules/BookCard",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <BookCard {...args}></BookCard>
);

export const ExplorePageCard = Template.bind({});
ExplorePageCard.args = {
  bookName: "Wise and Otherwise",
  author: "Sudha Murthy",
  readTime: "120-minute read",
  reads: "12k reads",
  image: "2.png",
  buttonName: "+ Add To Library",
};
