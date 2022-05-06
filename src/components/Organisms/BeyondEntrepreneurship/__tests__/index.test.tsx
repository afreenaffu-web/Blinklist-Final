import { render, screen } from "@testing-library/react";
import BeyondEntrepreneurship from "../index";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

test("Key ideas are displayed", () => {
  render(
    <BrowserRouter>
      <BeyondEntrepreneurship />
    </BrowserRouter>
  );
  const key = screen.getByText(
    /Turning Your Business into an Enduring Great Company/i
  );
  expect(key).toBeInTheDocument();
});

test("Finished Reading button is being displayed", () => {
  render(
    <BrowserRouter>
      <BeyondEntrepreneurship />
    </BrowserRouter>
  );

  const finished = screen.getByRole("button", { name: "Finished Reading" });
  expect(finished).toBeInTheDocument();
});

test("Synopsis tab is being displayed", () => {
  render(
    <BrowserRouter>
      <BeyondEntrepreneurship />
    </BrowserRouter>
  );

  const synopsis = screen.getByText("Synopsis");
  expect(synopsis).toBeInTheDocument();
});

test("Beyond Entrepreneurship image should be displayed", () => {
  render(
    <BrowserRouter>
      <BeyondEntrepreneurship />
    </BrowserRouter>
  );
  const image = screen.getByAltText(/Beyond Entrepreneurship 2.0/i);
  expect(image).toBeInTheDocument();
});
