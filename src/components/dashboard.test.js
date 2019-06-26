import React from "react";
import {
  render,
  fireEvent,
  queryByAltText,
  queryByText,
  getByTitle
} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("the display component", () => {
  const display = render(<Display />);

  xit("renders without crashing", () => {
    const test = render(<Display />);
  });

  describe("if the buttons work", () => {
    xtest("the ball button", () => {
      const ballButton = display.getByTitle("ballButton");
      fireEvent.click(ballButton);
    });
  });
});
