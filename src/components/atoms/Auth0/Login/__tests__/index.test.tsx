import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../index";
import "@testing-library/jest-dom";

test("AllTabs by categories should be rendered", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const Tabs = screen.getByText(/Log In/i);
  expect(Tabs).toBeInTheDocument();
});
