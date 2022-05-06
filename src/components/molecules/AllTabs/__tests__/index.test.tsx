import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AllTabs from "../index";
import "@testing-library/jest-dom";

test("AllTabs by categories should be rendered", () => {
  render(
    <BrowserRouter>
      <AllTabs searchTerm="" />
    </BrowserRouter>
  );

  const Tabs = screen.getByText(/Currently Reading/i);
  expect(Tabs).toBeInTheDocument();
});
test("Recently added titles should be rendered", () => {
  render(
    <BrowserRouter>
      <AllTabs searchTerm="" />
    </BrowserRouter>
  );

  const titles = screen.getByText(/Finished/i);
  expect(titles).toBeInTheDocument();
});
