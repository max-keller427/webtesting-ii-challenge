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
    test("ball button", () => {
      const ballButton = dashboard.getByTitle("ballButton");
      fireEvent.click(ballButton);
      const ballCount = display.getByTitle("ballCount");
      expect(ballCount).toHaveTextContent("1");
    });
  });
});
