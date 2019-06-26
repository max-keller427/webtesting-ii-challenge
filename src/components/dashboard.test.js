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

  it("renders without crashing", () => {
    const test = render(<Display />);
  });

  describe("if the buttons work", () => {
    test("the ball button", () => {
      const ballButton = display.getByTitle("ballButton");
      fireEvent.click(ballButton);
      const ballCount = 
    });
  });
});
