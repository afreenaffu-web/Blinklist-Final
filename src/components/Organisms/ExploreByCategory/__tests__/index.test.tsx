import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Explore from "../index";
import "@testing-library/jest-dom";

test("Explore by categories should be rendered", () => {
  render(
    <BrowserRouter>
      <Explore />
    </BrowserRouter>
  );

  const explore = screen.getByText(/Explore by Category/i);
  expect(explore).toBeInTheDocument();
});
test("Recently added titles should be rendered", () => {
  render(
    <BrowserRouter>
      <Explore />
    </BrowserRouter>
  );

  const titles = screen.getByText(/Psychology/i);
  expect(titles).toBeInTheDocument();
});
test("Popular titles should be rendered", () => {
  render(
    <BrowserRouter>
      <Explore />
    </BrowserRouter>
  );

  const popular = screen.getByText(/Economics/i);
  expect(popular).toBeInTheDocument();
});
