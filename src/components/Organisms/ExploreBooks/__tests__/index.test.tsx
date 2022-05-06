import { render, screen } from "@testing-library/react";
import ExploreBooks from "../index";
import "@testing-library/jest-dom";
test("THe girl image should be rendered", () => {
  render(<ExploreBooks />);

  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("src", "girl.png");
});
