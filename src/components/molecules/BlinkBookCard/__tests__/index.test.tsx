import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import { BrowserRouter } from "react-router-dom";
import CurrentCard from "../index";
import "@testing-library/jest-dom";

test('button name should be "add to library"', async () => {
  render(
    <BrowserRouter>
      {" "}
      <CurrentCard
        bookName="Bring Your Human to Work"
        author="Erica Keswin"
        readTime="13-minute read"
        reads="1.9k reads"
        image="1.png"
        buttonName="+ Add to Library"
        id={1}
      />{" "}
    </BrowserRouter>
  );
  const buttonName = screen.getByText("+ Add to Library");
  expect(buttonName).toBeInTheDocument();
});
