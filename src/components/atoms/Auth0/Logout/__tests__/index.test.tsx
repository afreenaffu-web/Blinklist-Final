import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Logout from "../index";
import "@testing-library/jest-dom";

test("AllTabs by categories should be rendered", () => {
  render(
    <BrowserRouter>
      <Logout />
    </BrowserRouter>
  );

  const Tabs = screen.getByText(/Log Out/i);
  expect(Tabs).toBeInTheDocument();
});
