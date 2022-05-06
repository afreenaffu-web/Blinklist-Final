import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../index";
import "@testing-library/jest-dom";

test("Footer should render blinklist logo", () => {
  render(
    <BrowserRouter>
      {" "}
      <Footer />{" "}
    </BrowserRouter>
  );
  const image = screen.getByText(/Blinkist/i);
  expect(image).toBeInTheDocument();
});

test("Footer should have explore", () => {
  render(
    <BrowserRouter>
      {" "}
      <Footer />{" "}
    </BrowserRouter>
  );

  const explore = screen.getByText(
    /Big ideas in small packages. Start learning now/i
  );
  expect(explore).toBeInTheDocument();
});

test("Footer should have  Editorial", () => {
  render(
    <BrowserRouter>
      {" "}
      <Footer />{" "}
    </BrowserRouter>
  );

  const Editorial = screen.getByText(/Editorial/i);
  expect(Editorial).toBeInTheDocument();
});

test("Footer should have UsefulLinks", () => {
  render(
    <BrowserRouter>
      {" "}
      <Footer />{" "}
    </BrowserRouter>
  );
  const UsefulLinks = screen.getByText("UsefulLinks");
  expect(UsefulLinks).toBeInTheDocument();
});
test("Footer should have Partners", () => {
  render(
    <BrowserRouter>
      {" "}
      <Footer />{" "}
    </BrowserRouter>
  );
  const Partners = screen.getByText("Partners");
  expect(Partners).toBeInTheDocument();
});
