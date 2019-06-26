import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {
  render,
  fireEvent,
  queryByAltText,
  queryByText,
  getByTitle
} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("The App Component", () => {
  const app = render(<App />);
  const display = render(<Display />);
  const dashboard = render(<Dashboard />);

  it("exists", () => {
    expect(app).toBeTruthy();
  });

  it("contains both sub-components", () => {
    expect(display).toBeTruthy();
    expect(dashboard).toBeTruthy();
  });

  describe("if the buttons work correctly", () => {
    it("increases balls by one when ball button is pressed", () => {
      const { getByTestId } = render(<App />);

      const ballButton = getByTestId("ballButton");
      const ballCount = getByTestId("ballCount");

      fireEvent.click(ballButton);

      expect(ballCount).toHaveTextContent(1);
    });

    it("4 balls resets the strikes and balls", () => {
      const { getByTestId } = render(<App />);

      const ballButton = getByTestId("ballButton");
      const strikeButton = getByTestId("strikeButton");
      const strikeCount = getByTestId("strikeCount");
      const ballCount = getByTestId("ballCount");

      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);

      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);

      expect(strikeCount).toHaveTextContent(0);
      expect(ballCount).toHaveTextContent(0);
    });

    it("three strikes resets the balls and strikes", () => {
      const { getByTestId } = render(<App />);

      const ballButton = getByTestId("ballButton");
      const strikeButton = getByTestId("strikeButton");
      const strikeCount = getByTestId("strikeCount");
      const ballCount = getByTestId("ballCount");

      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);

      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);

      expect(strikeCount).toHaveTextContent(0);
      expect(ballCount).toHaveTextContent(0);
    });

    it("balls and strikes reset to 0 when a hit is recorded", () => {
      const { getByTestId } = render(<App />);

      const ballButton = getByTestId("ballButton");
      const strikeButton = getByTestId("strikeButton");
      const hitButton = getByTestId("hitButton");

      const strikeCount = getByTestId("strikeCount");
      const ballCount = getByTestId("ballCount");

      fireEvent.click(ballButton);
      fireEvent.click(ballButton);
      fireEvent.click(ballButton);

      fireEvent.click(strikeButton);
      fireEvent.click(strikeButton);

      fireEvent.click(hitButton);

      expect(strikeCount).toHaveTextContent(0);
      expect(ballCount).toHaveTextContent(0);
    });

    it("strike button pressed twice will equal 2 strikes", () => {
      const { getByTestId } = render(<App />);

      const foulButton = getByTestId("foulButton");

      const strikeCount = getByTestId("strikeCount");

      fireEvent.click(foulButton);
      fireEvent.click(foulButton);

      expect(strikeCount).toHaveTextContent(2);
    });

    it("strike button pressed thrice will equal 2 strikes", () => {
      const { getByTestId } = render(<App />);

      const foulButton = getByTestId("foulButton");

      const strikeCount = getByTestId("strikeCount");

      fireEvent.click(foulButton);
      fireEvent.click(foulButton);
      fireEvent.click(foulButton);

      expect(strikeCount).toHaveTextContent(2);
    });
  });
});
