import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../index";
import React from "react";
import "@testing-library/jest-dom";

test("app bar should render blinklist logo", () => {
  render(
    <BrowserRouter>
      {" "}
      <Header />{" "}
    </BrowserRouter>
  );
  const image = screen.getByAltText(/Blinkist/i);
  expect(image).toBeInTheDocument();
});

test("app bar should have explore", () => {
  render(
    <BrowserRouter>
      {" "}
      <Header />{" "}
    </BrowserRouter>
  );

  const explore = screen.getByText(/Explore/i);
  expect(explore).toBeInTheDocument();
});

test("app bar should have My library", () => {
  render(
    <BrowserRouter>
      {" "}
      <Header />{" "}
    </BrowserRouter>
  );

  const mylibrary = screen.getByText(/My Library/i);
  expect(mylibrary).toBeInTheDocument();
});

test("app bar should have Avatar A", () => {
  render(
    <BrowserRouter>
      {" "}
      <Header />{" "}
    </BrowserRouter>
  );
  const avatar = screen.getByText("A");
  expect(avatar).toBeInTheDocument();
});

test("when clicked on search, explore should disappear", () => {
  render(
    <BrowserRouter>
      {" "}
      <Header />{" "}
    </BrowserRouter>
  );

  const search = screen.getAllByRole("button");
  fireEvent.click(search[0]);
});
test("Search bar is displayed when clicked on search icon button", () => {
  render(
    <BrowserRouter>
      {" "}
      <Header />{" "}
    </BrowserRouter>
  );

  const search = screen.getAllByRole("button");
  fireEvent.click(search[0]);
});
