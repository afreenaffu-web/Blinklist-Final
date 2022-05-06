import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Category from "../index";
import React from "react";
import "@testing-library/jest-dom";

test("Category name should match", () => {
  render(
    <BrowserRouter>
      {" "}
      <Category
        categoryname="Entrepreneurship"
        sx={{ ":hover": { color: "#0365F2", backgroundColor: "#F1F6F4" } }}
        icon={<NotificationsNoneIcon />}
      />{" "}
    </BrowserRouter>
  );

  const name = screen.getByText(/Entrepreneurship/i);
  expect(name).toBeInTheDocument();
});
