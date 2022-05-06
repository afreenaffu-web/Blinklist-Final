import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { BrowserRouter } from "react-router-dom";
import CurrentCard from "../index";
import "@testing-library/jest-dom";

test('book name should match with "Bring Your Human to Work"', async () => {
  render(
    <BrowserRouter>
      {" "}
      <CurrentCard
        bookName="Bring Your Human to Work"
        author="Erica Keswin"
        readTime="13-minute read"
        reads="1.9k reads"
        image="1.png"
        buttonName="Finished"
        id={1}
      />{" "}
    </BrowserRouter>
  );
  const name = screen.getByText(/Bring Your Human to Work/i);
  expect(name).toBeInTheDocument();
});

test('author name should match with "Erica Keswin"', async () => {
  render(
    <BrowserRouter>
      {" "}
      <CurrentCard
        bookName="Bring Your Human to Work"
        author="Erica Keswin"
        readTime="13-minute read"
        reads="1.9k reads"
        image="1.png"
        buttonName="Finished"
        id={1}
      />{" "}
    </BrowserRouter>
  );
  const author = screen.getByText(/Erica Keswin/i);
  expect(author).toBeInTheDocument();
});

test("Read time should be 13-minute read", async () => {
  render(
    <BrowserRouter>
      {" "}
      <CurrentCard
        bookName="Bring Your Human to Work"
        author="Erica Keswin"
        readTime="13-minute read"
        reads="1.9k reads"
        image="1.png"
        buttonName="Finished"
        id={1}
      />{" "}
    </BrowserRouter>
  );
  const readTime = screen.getByText(/13-minute read/);
  expect(readTime).toBeInTheDocument();
});
test("Reads should be 1.9k reads", async () => {
  render(
    <BrowserRouter>
      {" "}
      <CurrentCard
        bookName="Bring Your Human to Work"
        author="Erica Keswin"
        readTime="13-minute read"
        reads="1.9k reads"
        image="1.png"
        buttonName="Finished"
        id={1}
      />{" "}
    </BrowserRouter>
  );
  const reads = screen.getByText(/1.9k reads/);
  expect(reads).toBeInTheDocument();
});

test('button name should be "Finished"', async () => {
  render(
    <BrowserRouter>
      {" "}
      <CurrentCard
        bookName="Bring Your Human to Work"
        author="Erica Keswin"
        readTime="13-minute read"
        reads="1.9k reads"
        image="1.png"
        buttonName="Finished"
        id={1}
      />{" "}
    </BrowserRouter>
  );
  const buttonName = screen.getByText("Finished");
  expect(buttonName).toBeInTheDocument();
});
