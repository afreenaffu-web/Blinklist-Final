import { render, screen } from "@testing-library/react";
import MyLibraryTitle from "../index";

test("renders my library", () => {
  render(<MyLibraryTitle />);
  const titleName = screen.getByText(/My Library/i);
  expect(titleName).toBeInTheDocument();
});
