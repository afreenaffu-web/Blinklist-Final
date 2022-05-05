import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookCard from "./index";

export default {
  title: "molecules/BookCard",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template2: ComponentStory<typeof BookCard> = (args) => (
  <BookCard {...args}></BookCard>
);

export const HomePageCard = Template2.bind({});
HomePageCard.args = {
  bookName: "Wise and Otherwise",
  author: "Sudha Murthy",
  readTime: "120-minute read",
  reads: "12k reads",
  image: "1.png",
};
